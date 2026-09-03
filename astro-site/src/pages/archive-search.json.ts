import { getPosts } from '../lib/content';

function normalizeSearchText(value: string) {
  return value.toLowerCase().replace(/\s+/g, ' ').trim();
}

export function GET() {
  const searchIndex = Object.fromEntries(getPosts().map((post) => [
    post.permalink,
    normalizeSearchText([
      post.title,
      post.excerpt,
      post.rawContent,
      post.tags.join(' '),
      post.categories.join(' '),
      String(post.date.getFullYear()),
    ].join(' ')),
  ]));

  return new Response(JSON.stringify(searchIndex), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}
