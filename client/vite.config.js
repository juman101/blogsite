import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://blogsite-0amv.onrender.com',
        secure: false,
      },
    },
  },
  plugins: [react()],
});
