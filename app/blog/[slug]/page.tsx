import Container from "@/app/ui/container";
import DateFormatter from "@/app/ui/date-formatter";
import ReadTimeFormatter from "@/app/ui/read-time-formatter";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { markdownToHtml } from "@/lib/markdownToHtml";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import readingTime from "reading-time";
import Comments from "@/app/ui/comments";

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");
  const stats = readingTime(content);

  return (
    <main>
      <Container>
        <article className="overflow-hidden">
          <h1 className="mb-4 text-3xl">{post.title}</h1>
          <div className="flex gap-2 mb-8">
            <DateFormatter dateString={post.date} />
            <span className="text-sm text-gray-500">·</span>
            <ReadTimeFormatter readTime={stats.text} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
        <hr />
        <Comments />
      </Container>
    </main>
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
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        "https://github.com/nyongho11/nyongho.dev/assets/70843139/44491e93-3e5b-4785-8316-fedfbe878ef0",
      ],
      locale: "ko_KR",
      type: "website",
      siteName: "nyongho",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [
        "https://github.com/nyongho11/nyongho.dev/assets/70843139/44491e93-3e5b-4785-8316-fedfbe878ef0",
      ],
    },
  };
}

export function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
