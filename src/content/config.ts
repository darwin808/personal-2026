import { defineCollection, z } from 'astro:content';

const experienceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    position: z.string(),
    dateRange: z.string(),
    url: z.string().url().optional(),
    technologies: z.array(z.string()),
    order: z.number(),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    technologies: z.array(z.string()),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

const writingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    readTime: z.string(),
    url: z.string().url(),
    order: z.number(),
  }),
});

export const collections = {
  experience: experienceCollection,
  projects: projectsCollection,
  writing: writingCollection,
};
