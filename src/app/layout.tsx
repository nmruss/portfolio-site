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
      <body className="min-h-[100vh]">
          <Nav/>
          <main>
            <div className="pt-[104px]">
              {children}
            </div>
          </main>
          <footer className="bg-black text-white text-center p-10">Nick Russo, Developer.</footer>
      </body>
    </html>
  );
}
