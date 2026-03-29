import matter from 'gray-matter';
import { marked } from 'marked';
import fs from 'node:fs';
import path from 'node:path';
import { siteConfig } from './site';

export interface SiteConfig {
  title: string;
  tagline: string;
  description: string;
  lang: string;
  url: string;
  navigation: Array<{ title: string; url: string }>;
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    email?: string;
  };
}

export interface StandalonePage {
  title: string;
  permalink: string;
  html: string;
  excerpt: string;
}

export interface Post {
  title: string;
  slug: string;
  category: string;
  categories: string[];
  tags: string[];
  excerpt: string;
  html: string;
  rawContent: string;
  date: Date;
  permalink: string;
  readingTime: number;
  draft: boolean;
}

const contentRoot = path.join(process.cwd(), 'src', 'content');
const postsDirectory = path.join(contentRoot, 'posts');
const aboutPath = path.join(contentRoot, 'about.md');
const resumePath = path.join(contentRoot, 'resume.md');

marked.setOptions({
  gfm: true,
  breaks: false,
});

let cachedConfig: SiteConfig | undefined;
let cachedPosts: Post[] | undefined;
let cachedAbout: StandalonePage | undefined;
let cachedResume: StandalonePage | undefined;

function normalizeSegment(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function ensureArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }

  if (typeof value === 'string') {
    return value
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

function stripMarkup(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/[>*_~|-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function deriveExcerpt(markdown: string, fallback = ''): string {
  if (fallback.trim()) {
    return fallback.trim();
  }

  const plain = stripMarkup(markdown);
  return plain.length > 180 ? `${plain.slice(0, 177).trim()}...` : plain;
}

function calculateReadingTime(content: string): number {
  const wordCount = stripMarkup(content).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / 220));
}

function parseMarkdownFile(filePath: string) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const parsed = matter(raw);

  return {
    data: parsed.data as Record<string, unknown>,
    content: parsed.content.trim(),
    html: marked.parse(parsed.content) as string,
  };
}

function parseSiteConfig(): SiteConfig {
  if (!cachedConfig) {
    cachedConfig = siteConfig;
  }

  return cachedConfig;
}

function parseStandalonePage(filePath: string, fallbackTitle: string, fallbackPermalink: string): StandalonePage {
  const { data, content, html } = parseMarkdownFile(filePath);

  return {
    title: String(data.title ?? fallbackTitle),
    permalink: String(data.permalink ?? fallbackPermalink),
    html,
    excerpt: deriveExcerpt(content),
  };
}

export function getSiteConfig(): SiteConfig {
  return parseSiteConfig();
}

export function getAboutPage(): StandalonePage {
  if (!cachedAbout) {
    cachedAbout = parseStandalonePage(aboutPath, 'About', '/about/');
  }

  return cachedAbout;
}

export function getResumePage(): StandalonePage {
  if (!cachedResume) {
    cachedResume = parseStandalonePage(resumePath, 'Resume', '/resume/');
  }

  return cachedResume;
}

export function getPosts(): Post[] {
  if (cachedPosts) {
    return cachedPosts;
  }

  const entries = fs
    .readdirSync(postsDirectory)
    .filter((fileName) => /\.md$/i.test(fileName))
    .map((fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const { data, content, html } = parseMarkdownFile(filePath);
      const slug = path.basename(fileName, path.extname(fileName)).replace(/^\d{4}-\d{2}-\d{2}-/, '');
      const categories = ensureArray(data.categories);
      const tags = ensureArray(data.tags);
      const category = normalizeSegment(categories[0] ?? 'posts');
      const dateFromFileName = path.basename(fileName).slice(0, 10);
      const dateValue = data.date instanceof Date
        ? data.date.toISOString().slice(0, 10)
        : String(data.date ?? dateFromFileName);
      const excerpt = deriveExcerpt(content, String(data.excerpt ?? ''));
      const draft = data.draft === true;

      return {
        title: String(data.title ?? slug.replace(/-/g, ' ')),
        slug,
        category,
        categories,
        tags,
        excerpt,
        html,
        rawContent: content,
        date: new Date(`${dateValue}T12:00:00`),
        permalink: `/${category}/${slug}/`,
        readingTime: calculateReadingTime(content),
        draft,
      } satisfies Post;
    })
    .filter((post) => import.meta.env.DEV || !post.draft)
    .sort((left, right) => right.date.getTime() - left.date.getTime());

  cachedPosts = entries;
  return cachedPosts;
}

export function getPostByParams(category: string, slug: string): Post | undefined {
  return getPosts().find((post) => post.category === category && post.slug === slug);
}

export function getTagCounts(): Array<{ tag: string; count: number }> {
  const counts = new Map<string, number>();

  for (const post of getPosts()) {
    for (const tag of post.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((left, right) => left.tag.localeCompare(right.tag));
}

export function getCategoryCounts(): Array<{ category: string; count: number }> {
  const counts = new Map<string, number>();

  for (const post of getPosts()) {
    const label = post.categories[0] ?? post.category;
    counts.set(label, (counts.get(label) ?? 0) + 1);
  }

  return [...counts.entries()]
    .map(([category, count]) => ({ category, count }))
    .sort((left, right) => right.count - left.count || left.category.localeCompare(right.category));
}

export function getYearCounts(): Array<{ year: number; count: number }> {
  const counts = new Map<number, number>();

  for (const post of getPosts()) {
    const year = post.date.getFullYear();
    counts.set(year, (counts.get(year) ?? 0) + 1);
  }

  return [...counts.entries()]
    .map(([year, count]) => ({ year, count }))
    .sort((left, right) => right.year - left.year);
}