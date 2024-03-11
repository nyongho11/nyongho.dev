import { getAllPosts } from '@/lib/api';
import { SITE_CONFIG } from '@/lib/constants';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  const routes = ['', '/blog'].map((route) => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...posts, ...routes];
}
