import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// Vite Configuration for Production
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
    },
    server: {
        proxy: {
            '/api': {
                target: 'https://novahr-backend-api.azurewebsites.net',
                changeOrigin: true,
                secure: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        },
        port: 5173,
        https: false // Disable HTTPS as it is not needed for Azure Deployment
    }
});
