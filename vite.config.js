import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  test: {
    globals: true,                 // permet d'utiliser test/describe/expect sans import
    environment: 'jsdom',          // simule un navigateur
    setupFiles: './src/setupTests.js' // active jest-dom
  },
});
