import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/posts': {
        target: process.env.PROXY_URL,
        changeOrigin: true,
      }
    }
  }
})
