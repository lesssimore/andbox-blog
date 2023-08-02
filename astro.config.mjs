import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://yukky-sandbox.dev/",
  vite: {
    optimizeDeps: {
      exclude: ["fsevents"],
    },
  },
  output: "hybrid",
  adapter: cloudflare(),
  build: {
    inlineStylesheets: "auto",
  },
});
