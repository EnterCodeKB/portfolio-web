import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Meny from "./Componenter/Meny";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Min Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <p></p>
        {children}
      </body>
    </html>
  );
}
