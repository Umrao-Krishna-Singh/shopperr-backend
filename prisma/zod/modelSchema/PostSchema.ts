import { z } from 'zod';

/////////////////////////////////////////
// POST SCHEMA
/////////////////////////////////////////

export const PostSchema = z.object({
  id: z.bigint(),
  title: z.string().max(126),
  content: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  createdById: z.number().int(),
  timezone: z.string().max(50),
});

export type Post = z.infer<typeof PostSchema>;

/////////////////////////////////////////
// POST OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PostOptionalDefaultsSchema = PostSchema.merge(
  z.object({
    id: z.bigint().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type PostOptionalDefaults = z.infer<typeof PostOptionalDefaultsSchema>;

export default PostSchema;
