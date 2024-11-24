import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// Vite Configuration
export default defineConfig({
    plugins: [plugin()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        outDir: 'build', // Specifies the build output directory for production
        rollupOptions: {
            input: './index.html', // Entry point for the production build
        },
        sourcemap: false, // Disable sourcemaps for smaller bundle sizes
        minify: 'esbuild', // Use esbuild for minification for faster builds
        chunkSizeWarningLimit: 500, // Increase warning limit to avoid warnings for larger chunks
    }
});
