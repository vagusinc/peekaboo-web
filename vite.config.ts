import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import path from "node:path";
import tsconfigPaths from "vite-tsconfig-paths";
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    netlifyPlugin(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "~/": path.join(__dirname, "app/"),
      "~/shared-components": path.join(__dirname, "app/shared/components"),
      "~/feature-auth": path.join(__dirname, "app/features/auth"),
    },
  },
});
