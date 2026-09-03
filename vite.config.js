import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'src',
  plugins: [react()],
  build: {
    outDir: '../dist'
  },
  test:{
    environment: 'jsdom',
    globals: true,
    setupFiles: ["./test-setup.js"],
    coverage: {
      provider: 'v8',
      reporter: ["text","html"] 
    }
  }
})