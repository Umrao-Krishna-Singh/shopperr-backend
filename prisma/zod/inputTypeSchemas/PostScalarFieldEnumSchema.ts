import { z } from 'zod';

export const PostScalarFieldEnumSchema = z.enum(['id','title','content','createdAt','updatedAt','createdById','timezone']);

export default PostScalarFieldEnumSchema;
