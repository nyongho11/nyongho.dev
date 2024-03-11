import { getAllPosts } from "@/lib/api";
import { Metadata } from "next";
import Link from "next/link";
import Container from "../ui/container";
import PostPreview from "../ui/post-preivew";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Blog() {
  const posts = getAllPosts();
  console.log(posts);
  return (
    <main>
      <Container>
        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <Link key={post.slug} className="no-underline" as={`/blog/${post.slug}`} href="/blog/[slug]">
              <PostPreview
                title={post.title}
                description={post.description}
                date={post.date}
                readTime={post.readTime}
              />
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
