// src/lib/markdown.ts

import toc from "@jsdevtools/rehype-toc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";

export function markdownToHtml(markdown: string): Promise<string> {
  return unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypePrettyCode, {
    theme: {
      dark: "github-dark-dimmed",
      light: "github-light",
    }
  })
  .use(rehypeStringify)

    .process(markdown)
    .then((res) => res.toString());
}