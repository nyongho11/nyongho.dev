import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
import Header from "./ui/header";
import { ThemeProvider } from "@/components/theme-provider";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    template: "%s - Nyongho",
    default: "Nyongho",
  },
  description: "Frontend developer blog by Nyongho.",
  keywords: "frontend, developer, blog, nyongho",
  // openGraph: {}
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={
        cn(
          "max-w-screen-md min-w-[320px] mx-auto bg-background font-sans antialiased",
          fontSans.variable
        )
      }>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Header />
          <div className="flex flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
