/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      enabled: true,
      provider: 'c8',
      all: true,
    },
  },
  server: {
    host: true,
    port: 5173,
    watch: { ignored: ['**/coverage/**'] },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/app/styles/vars";`,
      },
    },
  },
});
