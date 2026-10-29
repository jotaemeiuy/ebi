import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import { satteri } from '@astrojs/markdown-satteri';
import { satteriKatex } from 'satteri-katex';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  markdown: {
    processor: satteri({
      features: { math: true },
      mdastPlugins: [satteriKatex()],
    }),
  },
  vite: {
    plugins: [tailwindcss()]
  }
});