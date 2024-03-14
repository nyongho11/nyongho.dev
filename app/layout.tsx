import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "./ui/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Noto_Sans_KR } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import { GA_TRACKING_ID, SITE_CONFIG } from "@/lib/constants";

const fontSans = Noto_Sans_KR({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - nyongho",
    default: "nyongho",
  },
  description: "프론트엔드 개발자 nyongho의 담백한 개발 블로그",
  openGraph: {
    images: [
      'https://github.com/Yongho5580/nyongho.dev/assets/70843139/44491e93-3e5b-4785-8316-fedfbe878ef0',
    ],
    locale: "ko_KR",
  },
  authors: {
    name: "김용호",
    url: SITE_CONFIG.url,
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: SITE_CONFIG.url,
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
        {process.env.NODE_ENV === "production" && <GoogleAnalytics gaId={GA_TRACKING_ID} />}
    </html>
  );
}
