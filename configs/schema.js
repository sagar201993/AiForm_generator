const { pgTable, varchar, serial, text } = require("drizzle-orm/pg-core");

export const JsonForms = pgTable("josnForms", {
  id: serial("id").primaryKey(),
  jsonform: text("jsonform").notNull(),
  createdBy: varchar("createdBy").notNull(),
  createdAt: varchar("createdAt").notNull(),
});
