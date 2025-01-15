import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgSpritePlugin({
      include: '**/icons/*.svg',
      symbolId: '[name]'
    })
  ],
  server: {
    port: '3000',
    host: '192.168.1.4'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@ui': fileURLToPath(new URL('./src/components/ui', import.meta.url)),
      '@images': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
      '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@layout': fileURLToPath(new URL('./src/layout', import.meta.url)),
      '@router': fileURLToPath(new URL('./src/router', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@helpers': fileURLToPath(new URL('./src/helpers', import.meta.url)),
    },
    extensions: ['.js', '.vue', '.scss', '.html']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          '@import "./src/assets/style/_mixins.scss"; @import "./src/assets/style/_variables.scss";'
      }
    }
  }
});
