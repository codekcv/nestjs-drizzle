import { integer, jsonb, serial, pgTable } from 'drizzle-orm/pg-core';
import { users } from './users.schema';

export const profileInfo = pgTable('profileInfo', {
  id: serial('id').primaryKey(),
  metadata: jsonb('meta'),
  userId: integer('userId').references(() => users.id),
});
