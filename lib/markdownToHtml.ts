// src/lib/markdown.ts

import toc from '@jsdevtools/rehype-toc';
import rehypeStringify from 'rehype-stringify';
import remarkRehype from 'remark-rehype';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkBreaks from 'remark-breaks'

export function markdownToHtml(markdown: string): Promise<string> {
  return unified()
    .use(remarkParse)
    .use(remarkBreaks)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeExternalLinks, {
      target: '_blank',
      rel: ['noopener', 'noreferrer'],
    })
    .use(rehypePrettyCode, {
      theme: {
        dark: "github-dark",
        light: "github-light",
      },
    })
    .use(rehypeStringify)

    .process(markdown)
    .then((res) => res.toString());
}
