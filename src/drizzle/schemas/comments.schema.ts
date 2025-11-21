import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';
import { users } from './users.schema';
import { posts } from './posts.schema';

export const comments = pgTable('comments', {
  id: serial('id').primaryKey(),
  text: text('text').notNull(),
  authorId: integer('authorId').references(() => users.id),
  postsId: integer('postsId').references(() => posts.id),
});
