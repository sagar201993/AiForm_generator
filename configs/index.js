import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon(
  "postgresql://neondb_owner:e3fkQJxw9HWZ@ep-sparkling-mountain-a2ajd3ic.eu-central-1.aws.neon.tech/neondb?sslmode=require"
);
export const db = drizzle(sql, { schema });
