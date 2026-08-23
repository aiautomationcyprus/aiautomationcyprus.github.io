import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog');
  const site = 'https://aiautomationcyprus.github.io';

  const staticPages = ['', '/blog/'];
  const postUrls = posts.map((p) => `/${p.slug}/`);
  const allUrls = [...staticPages, ...postUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map((url) => `  <url><loc>${site}${url}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
