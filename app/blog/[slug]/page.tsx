import Container from "@/app/ui/container";
import { getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function Post({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        return notFound();
    }

    const content = await markdownToHtml(post.content || '');

    return (
        <main>
            <Container>
                <article className="prose dark:prose-invert">
                <h1 className="font-bold text-6xl">{post.title}</h1>
                <div
                    dangerouslySetInnerHTML={{ __html: content }}
                />
                </article>
            </Container>
        </main>
    );
}

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export function generateMetadata({ params, searchParams }: Props): Metadata {
    const post = getPostBySlug(params.slug);

    if (!post) {
        return notFound();
    }

    return {
        title: `${post.title}`,
        openGraph: {
            title: `${post.title}`,
            images: [post.ogImage.url],
        },
    }

}