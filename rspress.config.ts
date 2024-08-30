import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Just JavaScript Knowledge',
  description: 'Just JavaScript 的翻译和总结',
  logoText: 'JJS Knowledge',
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/Yukiniro/just-javascript-knowledge' },
    ],
  },
});
