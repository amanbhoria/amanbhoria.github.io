import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/dev-portfolio/', // Important: the slash at the beginning AND end
  plugins: [react()],
})