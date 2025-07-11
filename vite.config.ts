import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  base: '/pontoscc-ui-kit/',
  plugins: [
    react(),
    dts({
      entryRoot: 'src',
      outDir: 'dist',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PontosccUI',
      fileName: (format) => `index.${format === 'cjs' ? 'cjs' : 'js'}`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
})
