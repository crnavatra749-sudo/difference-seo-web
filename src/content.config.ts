import { defineCollection, z } from 'astro:content';

const base = z.object({
  title: z.string(),
  description: z.string(),
  publishedAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  draft: z.boolean().default(false),
  image: z.string().optional(),
});

export const collections = {
  vodic: defineCollection({ type: 'content', schema: base.extend({ category: z.string().optional() }) }),
  projekti: defineCollection({ type: 'content', schema: base.extend({ client: z.string().optional() }) }),
  usluge: defineCollection({ type: 'content', schema: base }),
};
