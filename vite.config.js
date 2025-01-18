import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    // Optional: output to "docs" so you can serve from there on the main branch
    outDir: 'docs'
  }
})