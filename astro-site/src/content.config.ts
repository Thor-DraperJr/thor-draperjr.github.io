import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

import { PRESENTATION_IDS } from './lib/visualizations';

const posts = defineCollection({
  loader: glob({
    pattern: '[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]-*.md',
    base: './src/content/posts',
    retainBody: true,
    generateId: ({ entry }) => entry.replace(/\.md$/i, '').replace(/^\d{4}-\d{2}-\d{2}-/, ''),
  }),
  schema: z.strictObject({
    layout: z.literal('post').optional(),
    title: z.string().trim().min(1),
    date: z.coerce.date().optional(),
    draft: z.boolean(),
    categories: z.array(z.enum(['business', 'career', 'life', 'tech'])).min(1),
    tags: z.array(z.string().trim().min(1)).min(1),
    excerpt: z.string().trim().min(1),
    presentation: z.enum(PRESENTATION_IDS).optional(),
  }),
});

export const collections = { posts };
