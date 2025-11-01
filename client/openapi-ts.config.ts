import { defineConfig } from "@hey-api/openapi-ts";
import { config } from "dotenv";

config();

export default defineConfig({
  input: <string>process.env.API_URL,
  output: "./src/shared/generated",
})
