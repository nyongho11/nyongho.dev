"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import { FileTextIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Header() {
  return (
    <header className="h-14 sticky top-0 px-2 z-100 w-full bg-background flex justify-between items-center">
      <div>
        <Link href="/" className="h-fit w-fit" aria-label="Home">
          <Image className="dark:invert" src="/assets/logo.svg" alt="nyongho logo" width="30" height="30" />
        </Link>
      </div>
      <div className="flex items-center">
        <Button asChild variant="ghost" size="default">
          <Link href="/blog" aria-label="Blog">
            <FileTextIcon className="h-[1.2rem] w-[1.2rem]" />
          </Link>
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
}
