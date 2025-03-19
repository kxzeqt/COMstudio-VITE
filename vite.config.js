import { defineConfig } from 'vite';
import { vue } from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      config: './postcss.config.js',
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
});
