import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves from /<repo-name>/, so the asset base has to change.
// Every other host (Vercel, Netlify, Cloudflare Pages, Render) serves from root.
//   BASE_PATH=/sent-studio-landing/ npm run build
export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: false,
    reportCompressedSize: true,
  },
});
