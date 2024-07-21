import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Post = {
    id: Generated<number>;
    /**
     * @zod.string.max(126)
     */
    title: string;
    content: string;
    created_at: Generated<Timestamp>;
    updated_at: Timestamp;
    createdById: number;
    /**
     * @zod.string.max(50)
     */
    timezone: string;
};
export type User = {
    id: Generated<number>;
    /**
     * @zod.string.max(80)
     */
    username: string;
    /**
     * @zod.string.max(126)
     */
    fullname: string;
    /**
     * @zod.string.max(256)
     */
    email: string | null;
};
export type DB = {
    Post: Post;
    User: User;
};
