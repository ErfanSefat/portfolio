import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "./components/TopBar";
import Intro from "./components/Intro";
import MovingBlubs from "./components/MovingBlubs";
import BotBar from "./components/BotBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Erfan Sefat",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center relative contain-content">
        <MovingBlubs />
        <Intro />
        {children}
        <TopBar />
        <BotBar/>
      </body>
    </html>
  );
}
