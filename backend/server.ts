// import "reflect-metadata";
import { Hono } from "hono";
import { serve } from "bun";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

const app = new Hono();

app.use(cors());
app.use(logger());


const port = parseInt(process.env.PORT || "3000", 10);

serve({
  fetch: app.fetch,
  port: port,
});

console.log(`Server is running on http://localhost:${port}`);
