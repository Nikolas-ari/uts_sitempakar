import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Website",
  description: "Website yang dibuat dengan Next.js dan TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
