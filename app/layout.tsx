import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Folder Chat",
  description: "Transform the way you collaborate with Folder.Chat – the ultimate platform that seamlessly integrates chat functionality with your internal documents and data sources. Elevate team communication by chatting directly within your files or connecting with data sources effortlessly. Experience a new era of productivity and collaboration with Folder.Chat's innovative approach to document interaction. Elevate your workflow today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
