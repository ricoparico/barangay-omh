import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "rsuite/dist/rsuite-no-reset.min.css";

import { Toaster } from "react-hot-toast";

import "./(routes)/globals.css";
import { SessionProvider } from "next-auth/react";
import AiAgent from "@/components/AiAgent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BRGY 174 OMH",
  description: "Barangay Operations And Monitoring Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-right" reverseOrder={true} />
        <SessionProvider>{children}</SessionProvider>
        <AiAgent />
      </body>
    </html>
  );
}
