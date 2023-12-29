import type { Metadata } from "next";
import local from "next/font/local";

import clsx from "clsx";

import "./globals.css";

const font = local({
  src: "./font.woff2",
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "npz",
  description: "NPM Stats",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={clsx(font.variable, "bg-neutral-1 text-neutral-12 font-mono")}>{children}</body>
    </html>
  );
}
