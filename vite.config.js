import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ✅ makes all paths relative so Netlify can load JS, CSS, images correctly
  plugins: [react()],
})

