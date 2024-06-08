// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Use '/ecom-frontend/' if deploying under a subdirectory
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "/index.html", // Explicitly set input to avoid confusion
    },
  },
});
