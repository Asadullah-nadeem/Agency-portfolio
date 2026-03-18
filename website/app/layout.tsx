import type { Metadata } from "next";
import { Inter, Public_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-inter" });
const publicSans = Public_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"], variable: "--font-public-sans" });

export const metadata: Metadata = {
  title: "Spatial Tech | Creative Agency",
  description: "A high-performance tech agency specializing in spatial 3D experiences and minimalist digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${publicSans.variable} font-sans antialiased overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}
