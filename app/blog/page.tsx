import { getAllPosts } from "@/lib/api";
import { Metadata } from "next";
import Link from "next/link";
import Container from "../ui/container";

export const metadata: Metadata = {
    title: "Blog | Nyongho",
    description: "Developer blog by Nyongho",
    keywords: "frontend, developer, blog, nyongho",
};

export default function Blog() {
    const posts = getAllPosts();
    return (
        <main>
            <Container>
                <div className="flex flex-col gap-5">
                    {posts.map((post, index) => (
                        <Link key={post.slug} className="font-semibold text-2xl" as={`/blog/${post.slug}`} href="/blog/[slug]">{index}. {post.slug}</Link>
                    ))}
                </div>
            </Container>
        </main>
    );
}