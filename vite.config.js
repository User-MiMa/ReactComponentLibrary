import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'src',
  plugins: [react()],
  build: {
    outDir: '../dist'
  },
  test:{
    setupFiles:["./test-setup.js"],
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ["text","html"] 
    }
  }
})