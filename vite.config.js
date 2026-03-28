import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: '/goit-js-hw-10/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});