import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog');
  const site = 'https://ai-cyp.com';

  const staticPages = ['', '/blog/'];
  const postUrls = posts.map((p) => `/${p.slug}/`);
  const allUrls = [...staticPages, ...postUrls];

  const today = new Date().toISOString().split('T')[0];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map((url) => `  <url><loc>${site}${url}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>${url === '' ? '1.0' : '0.8'}</priority></url>`).join('\n')}
${posts.map((p) => `  <url><loc>${site}/${p.slug}/</loc><lastmod>${p.data.date}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
