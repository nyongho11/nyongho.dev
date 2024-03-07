import { getAllPosts } from "@/lib/api";
import { Metadata } from "next";
import Link from "next/link";
import Container from "../ui/container";

export const metadata: Metadata = {
    title: "Blog",
    description: "Developer blog by Nyongho",
    keywords: "frontend, developer, blog, nyongho",
};

export default function Blog() {
    const posts = getAllPosts();
    console.log(posts);
    return (
        <main>
            <Container>
                <div className="flex flex-col gap-5">
                    {posts.map((post) => (
                        <Link key={post.slug} className="text-xl" as={`/blog/${post.slug}`} href="/blog/[slug]">{post.title}</Link>
                    ))}
                </div>
            </Container>
        </main>
    );
}