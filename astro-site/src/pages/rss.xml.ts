import { getPosts, getSiteConfig } from '../lib/content';

function escapeXml(value: string): string {
  return value.replace(/[<>&'"]/g, (character) => {
    switch (character) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case '\'':
        return '&apos;';
      case '"':
        return '&quot;';
      default:
        return character;
    }
  });
}

export function GET() {
  const site = getSiteConfig();
  const posts = getPosts();
  const latestPostDate = posts[0]?.date ?? new Date();

  const items = posts
    .slice(0, 25)
    .map((post) => {
      const absoluteUrl = `${site.url}${post.permalink}`;

      return `<item>
  <title>${escapeXml(post.title)}</title>
  <link>${absoluteUrl}</link>
  <guid>${absoluteUrl}</guid>
  <pubDate>${post.date.toUTCString()}</pubDate>
  <description>${escapeXml(post.excerpt)}</description>
</item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${escapeXml(site.title)}</title>
  <link>${site.url}</link>
  <atom:link href="${site.url}/rss.xml" rel="self" type="application/rss+xml" />
  <description>${escapeXml(site.tagline)}</description>
  <language>${escapeXml(site.lang)}</language>
  <lastBuildDate>${latestPostDate.toUTCString()}</lastBuildDate>
${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}