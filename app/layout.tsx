import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nyongho | Frontend Developer",
  description: "Developer blog by Nyongho",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased max-w-screen-md min-w-[320px] mx-auto`}>
        <main className="flex flex-col">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
