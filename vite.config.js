import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../app'
  },
  base: '',
  plugins: [
    legacy({
      targets: ['defaults'],
    }),
  ]
})