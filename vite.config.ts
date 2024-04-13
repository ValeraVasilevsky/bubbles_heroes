import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader({
      defaultImport: "component",
      svgoConfig: {
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),
  ],

  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src/", import.meta.url)),
      },
      {
        find: "assets",
        replacement: fileURLToPath(new URL("./src/assets", import.meta.url)),
      },
      {
        find: "components",
        replacement: fileURLToPath(
          new URL("./src/components", import.meta.url)
        ),
      },
      {
        find: "sections",
        replacement: fileURLToPath(new URL("./src/sections", import.meta.url)),
      },
    ],
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "assets/index.scss";
        `,
      },
    },
  },

  server: {
    port: 8080,
  },

  base: "/bubbles_heroes/",
});
