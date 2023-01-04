/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    css: false,
    deps: {
      fallbackCJS: true,
    },
    setupFiles: './src/test/setupTests.ts',
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
