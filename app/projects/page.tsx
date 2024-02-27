import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | Nyongho",
    description: "Projects by Nyongho",
    keywords: "frontend, developer, 프로젝트, projects, blog, nyongho",
  };

export default function Projects () {
    return (
        <main className="px-4 pt-8">
            <h1>Projects</h1>
        </main>
    );
}