import Container from "@/app/ui/container";
import DateFormatter from "@/app/ui/date-formatter";
import { getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import dayjs, { Dayjs } from "dayjs";
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
                <article className="prose dark:prose-invert overflow-hidden">
                <h1 className="font-bold text-5xl">{post.title}</h1>
                <DateFormatter dateString={post.date} />
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