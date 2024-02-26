'use client';

import Link from "next/link";

export default function Header () {
    return (
        <header className="h-14 px-5 sticky top-0 z-50 w-full border-b flex justify-between items-center bg-white">
            <nav>
                <div>
                    <Link href="/">Home</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/resume">Resume</Link>
                </div>
            </nav>
        </header>
    );
}