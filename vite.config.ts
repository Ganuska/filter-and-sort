import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/filter-and-sort/',
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
    mainFields: ['main', 'module']
  }
});
