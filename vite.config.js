import legacy from '@vitejs/plugin-legacy'

export default {
  root: 'src',
  build: {
    outDir: '../app'
  },
  plugins: [
    legacy({
      targets: ['defaults'],
    }),
  ]
}