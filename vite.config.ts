import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Ensure public assets are copied correctly
    assetsDir: "assets",
    rollupOptions: {
      output: {
        // Preserve file names and structure
        assetFileNames: (assetInfo) => {
          // Keep original file names for images
          if (assetInfo.name && /\.(png|jpg|jpeg|svg|gif|webp)$/.test(assetInfo.name)) {
            return assetInfo.name;
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  publicDir: "public",
}));
