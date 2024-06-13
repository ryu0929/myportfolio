import { defineConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  root: 'src',
  publicDir: 'public',
  plugins: [react()],
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
      },
      output: {
          assetFileNames: (assetInfo) => {
            let extType = assetInfo.name.split('.')[1];
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = 'images';
            }
      //ビルド時のCSS名を明記してコントロールする
            if(extType === 'css') {
              return `assets/css/style.css`;
            }
            return `assets/${extType}/[name][extname]`;
          },
          chunkFileNames: 'assets/js/[name].js',
          entryFileNames: 'assets/js/[name].js',
        },
      },
    },
})
