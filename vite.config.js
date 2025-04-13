import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portfolio-Fikremariam/",
  server: {
    port: 3050,
  },
  plugins: [react()],
})

