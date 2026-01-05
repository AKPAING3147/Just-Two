import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Myanmar } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansMyanmar = Noto_Sans_Myanmar({
  variable: "--font-noto-sans-myanmar",
  subsets: ["myanmar"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Just Two",
  description: "Personal Retro Blog",
};

import { Toaster } from 'sonner';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansMyanmar.variable} antialiased scanlines`}
      >
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              border: '2px solid #2b2b2b',
              background: '#fdf6e3',
              color: '#2b2b2b',
              borderRadius: '0',
              boxShadow: '4px 4px 0px 0px #2b2b2b',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              fontWeight: 'bold',
            },
            className: 'brutal-toast'
          }}
        />
      </body>
    </html>
  );
}
