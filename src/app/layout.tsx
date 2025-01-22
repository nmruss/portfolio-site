import type { Metadata } from "next";
import Nav from "./components/Nav";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nick Russo",
  description: "Designer, Developer, Creator"
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/img/favicon.ico" type="img/x-icon"></link>
      <body className="min-h-[100vh] w-[100vw] overflow-x-hidden">
          <Nav/>
          <main>
            <div className="pt-[104px]">
              {children}
            </div>
          </main>
          <footer className="bg-black text-white text-center p-10">
            Nick Russo, Designer + Developer. | <Link className="hover:underline" href="mailto:nrussotech@gmail.com">nrussotech@gmail.com</Link>
          </footer>
      </body>
    </html>
  );
}
