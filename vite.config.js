import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      // Specifies that react-router-dom should not be bundled with the application
      external: ["react-router-dom"],
    },
  },
  plugins: [
    // Adds React support to Vite
    react(),
  ],
});
