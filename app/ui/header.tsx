'use client';

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <header className="h-14 fixed top-0 z-50 w-1/2 border-b flex justify-between items-center">
            <div>
                <Button asChild variant="link">
                    <Link href="/">Home</Link>
                </Button>
                <Button asChild variant="link">
                    <Link href="/blog">Blog</Link>
                </Button>
                <Button asChild variant="link">
                    <Link href="/projects">Projects</Link>
                </Button>
            </div>
            <div>
                <ModeToggle />
            </div>
        </header>
    );
}