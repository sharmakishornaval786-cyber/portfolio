import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ThemeProvider from "@/app/components/ThemeProvider";

export const metadata: Metadata = {
  title: "NAVAL | Data Analyst",
  description: "Showcase of NAVAL's software development projects and expertise",
  keywords: "portfolio, developer, projects, software engineering",
  authors: [{ name: "Your Name" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "My Portfolio",
    title: "My Portfolio | Developer",
    description: "Showcase of my software development projects and expertise",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
