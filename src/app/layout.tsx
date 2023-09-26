import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Topbar from "@/components/topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teodor Adolfsson",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-white p-8">
          <Topbar />
          {children}
        </main>
      </body>
    </html>
  );
}
