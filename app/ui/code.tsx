import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";

export async function Code({ code }: { code: string }) {
    const highlightedCode = await highlightCode(code);
    return (
        <code
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
        ></code>
    )
}

async function highlightCode(code: string) {
    const file = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypePrettyCode, {
            // See Options section below.
        })
        .use(rehypeStringify)
        .process(code);

    return String(file);
}