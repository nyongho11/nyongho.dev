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
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { slug, ...data, content } as Post;
}

export function getAllPosts() {
  const postPaths: string[] = sync(`${POSTS_PATH}/**/*.mdx`);
  return postPaths.map((postPath) => ({
    slug: postPath.replace(`${POSTS_PATH}/`, '').replace(/\.mdx$/, ''),
  }));
}
