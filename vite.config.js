import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // this helps load assets correctly on GitHub Pages
  plugins: [react()],
})
