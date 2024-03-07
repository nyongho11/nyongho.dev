import { sync } from 'glob';
import path, { join } from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { Post } from '@/interfaces/post';

const BASE_PATH = '_posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export function getPostSlugs() {
  return fs.readdirSync(POSTS_PATH);
}

export function getPostBySlug(slug: string) {
  const fullPath = join(POSTS_PATH, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { slug, ...data, content } as Post;
}

export function getAllPosts() {
  const postPaths: string[] = sync(`${POSTS_PATH}/**/*.mdx`);
  const allPosts: Post[] = postPaths.map((postPath) => {
    const fileContents = fs.readFileSync(postPath, 'utf8');
    const { data } = matter(fileContents);
    return {
      ...data,
      slug: postPath.replace(`${POSTS_PATH}/`, '').replace(/\.mdx$/, ''),
      title: data.title,
      date: data.date,
      coverImage: data.coverImage,
      description: data.description,
      ogImage: data.ogImage,
    };
  });
  return allPosts;
}
