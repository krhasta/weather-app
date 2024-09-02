import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// host: '0.0.0.0'은 vite 포트인 5173
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    proxy: {
      '/getUserIP': 'http://localhost:8080',
    },
  },
});
