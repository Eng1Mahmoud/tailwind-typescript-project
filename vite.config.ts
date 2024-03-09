import { terser } from "rollup-plugin-terser";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react(), terser()],
  build: {
    target: "esnext",
    modulePreload: true,
    outDir: "build",
    assetsDir: "assets",
    cssCodeSplit: true,
    cssMinify: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    
  },
});
