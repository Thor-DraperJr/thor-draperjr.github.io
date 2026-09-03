import type { APIRoute } from 'astro';
import sharp from 'sharp';
import { getPosts } from '../../../lib/content';

type Card = { title: string; category: string; date: string };

export function getStaticPaths() {
  return getPosts().map((post) => ({
    params: { category: post.category, slug: post.slug },
    props: { title: post.title, category: post.category, date: post.date.toISOString() },
  }));
}

const xmlEntities: Record<string, string> = {
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;',
};
const escapeXml = (value: string) => value.replace(/[&<>"']/g, (character) => xmlEntities[character]);

function wrapTitle(title: string) {
  for (let limit = 27; limit <= 45; limit += 3) {
    const lines: string[] = [];
    for (const word of title.split(/\s+/)) {
      const current = lines.at(-1) ?? '';
      if (!current || `${current} ${word}`.length > limit) lines.push(word);
      else lines[lines.length - 1] = `${current} ${word}`;
    }
    if (lines.length <= 4) return lines;
  }
  return [title];
}
export const GET: APIRoute<Card> = async ({ props }) => {
  const lines = wrapTitle(props.title);
  const fontSize = lines.length < 3 ? 64 : lines.length === 3 ? 54 : 44;
  const lineGap = fontSize + 14;
  const firstLine = 300 - ((lines.length - 1) * lineGap) / 2;
  const title = lines.map((line, index) =>
    `<text x="88" y="${firstLine + index * lineGap}" class="title">${escapeXml(line)}</text>`
  ).join('');
  const date = new Date(props.date).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  });
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><style>
    .title{font:700 ${fontSize}px Georgia,serif;fill:#14212f}
    .meta{font:700 22px Arial;letter-spacing:4px;fill:#007f86}
    .byline{font:600 20px Arial;fill:#526171}
  </style><rect width="1200" height="630" fill="#f4efe4"/><path d="M0 92H1200M72 0V630" stroke="#14212f" stroke-opacity=".13"/><circle cx="1105" cy="90" r="42" fill="#ffb000"/><text x="88" y="120" class="meta">${escapeXml(props.category.toUpperCase())} / FIELD NOTE</text>${title}<text x="88" y="548" class="byline">Thor Draper Jr · ${escapeXml(date)}</text><path d="M88 574H1112" stroke="#007f86" stroke-width="6"/></svg>`;
  const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=3600' },
  });
};
