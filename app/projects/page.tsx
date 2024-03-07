import { Metadata } from "next";
import Container from "../ui/container";

export const metadata: Metadata = {
    title: "Projects",
    description: "Projects by Nyongho",
    keywords: "frontend, developer, 프로젝트, projects, blog, nyongho",
};

export default function Projects() {
    return (
        <main>
            <Container>
                <h1>Projects</h1>
            </Container>
        </main>
    );
}