import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "For Anshu, With Love",
  description: "A birthday letter, a map of our journeys, and a story that keeps counting.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
