import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "./ui/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Noto_Sans_KR } from "next/font/google";

const fontSans = Noto_Sans_KR({
  weight: ["500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - nyongho",
    default: "nyongho.dev",
  },
  description: "Frontend developer blog by nyongho.",
  keywords: "frontend, developer, blog, nyongho",
  openGraph: {
    title: "nyongho.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "max-w-screen-md min-w-[320px] mx-auto bg-background font-sans antialiased",
          fontSans.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="flex flex-col">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
