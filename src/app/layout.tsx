import type { Metadata } from "next";
import Nav from "./components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nick Russo",
  description: "Developer, Designer, Creator",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-[100%]">
          <Nav/>
          <div className="mt-[104px]">
            {children}
          </div>
          <footer className="bg-black text-white text-center py-10 mb-0">Nick Russo, designer.</footer>
      </body>
    </html>
  );
}
