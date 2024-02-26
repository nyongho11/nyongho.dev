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
          disableTransitionOnChange
        >
          <Header />
          <div className="flex flex-col pt-14">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
