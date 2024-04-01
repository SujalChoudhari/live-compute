// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    // Other configuration options...
    build: {
        rollupOptions: {
            input: {
                main: './index.html', // This is the entry HTML file for your application
                get: './get.html' // Include other HTML files here
            }
        }
    }
});
