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
      <body>
          <Nav/>
          <div className="mt-[104px]">
            {children}
          </div>
      </body>
    </html>
  );
}
