import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Github Pages Deploy With Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="p-4 grid grid-rows-[auto_1fr] gap-8 ">
        <nav>
          <ul className=" flex flex-wrap gap-4">
            <li>
              <Link href="/" className=" underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/with-query" className="underline">
                With Query
              </Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
