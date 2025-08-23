import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    build: {
        outDir: 'build',
    },
    plugins: [
        react()
    ],
    resolve: {
        alias: {
        "@": path.resolve(__dirname, "src"),
        }
    },
    server: {
        port: 3000,
        open: true,
        hmr: {
            host: 'localhost',
            clientPort: 3000
        }
    }
});