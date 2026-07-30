// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';

export default defineConfig({
  site: 'https://japan.infoepic.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => {
        // 숫자ID 전용 리다이렉트 스텁([id].astro)은 실콘텐츠 없이
        // /entry/{slug}/로 meta-refresh만 하므로 사이트맵에서 제외
        if (/^https:\/\/japan\.infoepic\.com\/\d+\/$/.test(page)) return false;
        return true;
      },
    }),
  ],
  output: 'static',
  markdown: {
    rehypePlugins: [rehypeSlug],
  },
});
