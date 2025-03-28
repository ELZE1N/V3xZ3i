import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Z3iTremor - Security Researcher",
  description: "Personal website of Z3iTremor, Bug Hunter and Security Researcher",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><defs><linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23fb4934;stop-opacity:1' /><stop offset='100%' style='stop-color:%23cc241d;stop-opacity:1' /></linearGradient></defs><path d='M60 10 L110 35 L110 85 L60 110 L10 85 L10 35 Z' fill='url(%23grad)' stroke='white' stroke-width='2'/><text x='50%' y='58%' dominant-baseline='middle' text-anchor='middle' font-family='Arial Black' font-size='50' fill='white' font-weight='bold'>Z</text></svg>" />
      </head>
      <body className={vt323.className}>{children}</body>
    </html>
  );
}
