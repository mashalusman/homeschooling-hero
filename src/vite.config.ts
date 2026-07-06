import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-repository-name/', // 👈 REPLACE THIS WITH YOUR EXACT REPOSITORY NAME
})
