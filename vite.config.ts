import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import tailwindcss from '@tailwindcss/vite'
import autoprefixer from "autoprefixer";

export default defineConfig({
  base: '/',
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
