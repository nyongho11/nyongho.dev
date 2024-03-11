import Container from "@/app/ui/container";
import DateFormatter from "@/app/ui/date-formatter";
import ReadTimeFormatter from "@/app/ui/read-time-formatter";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { markdownToHtml } from "@/lib/markdownToHtml";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import readingTime from "reading-time";

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");
  const stats = readingTime(content);

  return (
    <Container>
      <main>
        <article className="overflow-hidden">
          <h1 className="font-bold text-5xl">{post.title}</h1>
          <div className="flex gap-2">
            <DateFormatter dateString={post.date} />
            <span className="text-sm text-gray-500">·</span>
            <ReadTimeFormatter readTime={stats.text} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </main>
    </Container>
  );
}

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params, searchParams }: Props): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return {
    title: {
      absolute: `${post.title}`,
    },
    openGraph: {
      title: `${post.title}`,
      description: `${post.description}`,
      images: [post.ogImage.url],
      locale: "ko_KR",
      type: "website",
    },
  };
}

export function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
