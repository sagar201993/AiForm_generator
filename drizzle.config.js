import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:e3fkQJxw9HWZ@ep-sparkling-mountain-a2ajd3ic.eu-central-1.aws.neon.tech/neondb?sslmode=require",
  },
});
