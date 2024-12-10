import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'  // Node.js path is fine in this context for Vite config
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { replace } from 'react-router-dom';



export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
        proxy: {
            '/api': {
                target: 'https://places.googleapis.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            }
        }
    },
})
