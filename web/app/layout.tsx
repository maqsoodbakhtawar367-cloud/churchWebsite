import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/src/components/organisms/Navbar";
import { PRIMARY_NAV } from "@/src/lib/primaryNav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "St. Matthew's Lutheran Church",
  description:
    "Experience God's love and grace in a welcoming community in Lihue, Kauaʻi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full min-h-0 w-full max-w-full">
      <body
        className={`${inter.className} flex h-full min-h-0 w-full min-w-0 min-h-full max-w-full flex-col text-[#1a1a1a] antialiased`}
      >
        <Navbar
          links={PRIMARY_NAV}
          donateHref="#donate"
          donateLabel="Donate"
        />
        {children}
      </body>
    </html>
  );
}
