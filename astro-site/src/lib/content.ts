import matter from 'gray-matter';
import { marked } from 'marked';
import { getCollection } from 'astro:content';
import fs from 'node:fs';
import path from 'node:path';
import { siteConfig } from './site';
import {
  validatePostExperience,
  type PostExperience,
  type PresentationId,
} from './visualizations';

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
  headings: Array<{ depth: number; id: string; text: string }>;
  rawContent: string;
  date: Date;
  permalink: string;
  presentation?: PresentationId;
  presentHref?: string;
  experience: PostExperience;
  readingTime: number;
  draft: boolean;
}

const contentRoot = path.join(process.cwd(), 'src', 'content');
const aboutPath = path.join(contentRoot, 'about.md');
const resumePath = path.join(contentRoot, 'resume.md');
const postEntries = await getCollection('posts');

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

// The post layout renders the title as the page <h1>. Markdown bodies that
// repeat the title with a leading `#` would produce a duplicate <h1>, which is
// an accessibility and SEO defect. Strip only a leading body <h1> (before any
// other content); section headings use <h2>+ and are untouched.
function stripLeadingH1(html: string): string {
  return html.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>\s*/i, '');
}

function decodeHtmlEntities(value: string): string {
  const codePoint = (match: string, value: string, radix: number) => {
    const number = Number.parseInt(value, radix);
    return Number.isInteger(number) && number >= 0 && number <= 0x10ffff && !(number >= 0xd800 && number <= 0xdfff)
      ? String.fromCodePoint(number)
      : match;
  };

  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (match, code: string) => codePoint(match, code, 10))
    .replace(/&#x([0-9a-f]+);/gi, (match, code: string) => codePoint(match, code, 16));
}

function headingId(value: string): string {
  return normalizeSegment(decodeHtmlEntities(value.replace(/<[^>]+>/g, ' '))) || 'section';
}

function escapeAttribute(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function enhanceHeadings(html: string): { html: string; headings: Post['headings'] } {
  const headings: Post['headings'] = [];
  const seen = new Map<string, number>();
  const enhanced = html.replace(/<h([2-4])([^>]*)>([\s\S]*?)<\/h\1>/gi, (_, depthValue, attributes, content) => {
    const depth = Number(depthValue);
    const text = decodeHtmlEntities(String(content).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
    const attributeText = String(attributes);
    const existingIdMatch = attributeText.match(/\sid\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
    const existingId = existingIdMatch?.[1] ?? existingIdMatch?.[2] ?? existingIdMatch?.[3];
    const baseId = existingId || headingId(String(content));
    const occurrence = (seen.get(baseId) ?? 0) + 1;
    seen.set(baseId, occurrence);
    const id = occurrence === 1 ? baseId : `${baseId}-${occurrence}`;
    headings.push({ depth, id, text });
    const nextAttributes = existingIdMatch
      ? attributeText.replace(existingIdMatch[0], ` id="${escapeAttribute(id)}"`)
      : `${attributeText} id="${escapeAttribute(id)}"`;

    return `<h${depth}${nextAttributes}>${content}<a class="heading-anchor" href="#${escapeAttribute(id)}" aria-label="Link to ${escapeAttribute(text)}">#</a></h${depth}>`;
  });

  return { html: enhanced, headings };
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

  const entries = postEntries
    .map((entry) => {
      const source = entry.filePath ? path.basename(entry.filePath) : `${entry.id}.md`;
      const content = entry.body?.trim();
      if (!content) {
        throw new Error(`${source} has no Markdown body`);
      }

      const slug = entry.id;
      const categories = [...entry.data.categories];
      const tags = [...entry.data.tags];
      const category = normalizeSegment(categories[0]);
      const dateFromFileName = source.slice(0, 10);
      const dateValue = entry.data.date?.toISOString().slice(0, 10) ?? dateFromFileName;
      const date = new Date(`${dateValue}T12:00:00Z`);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(dateValue) || Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== dateValue) {
        throw new Error(`${source} must declare a date or use a YYYY-MM-DD-prefixed filename`);
      }
      const excerpt = deriveExcerpt(content, entry.data.excerpt);
      const draft = entry.data.draft;
      const presentation = entry.data.presentation as PresentationId | undefined;
      const experience = validatePostExperience(content, presentation, source);
      const permalink = `/${category}/${slug}/`;
      const rendered = enhanceHeadings(stripLeadingH1(marked.parse(content) as string));

      return {
        title: entry.data.title,
        slug,
        category,
        categories,
        tags,
        excerpt,
        html: rendered.html,
        headings: rendered.headings,
        rawContent: content,
        date,
        permalink,
        presentation,
        presentHref: presentation ? `${permalink}present/` : undefined,
        experience,
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