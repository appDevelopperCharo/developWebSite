import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // GitHub Pages のサブディレクトリ（リポジトリ名）に合わせてベースパスを設定
  base: '/developWebSite/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dungeonTamer: resolve(__dirname, 'dungeon-tamer.html'),
        slimeTap: resolve(__dirname, 'slime-tap.html'),
      },
    },
  },
});
