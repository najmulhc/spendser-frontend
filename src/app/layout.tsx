import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "./providers/provider";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Toaster } from "./components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spendser | Your personal money manager",
  description:
    "This is a full stack personal money management app using MERN stack and TypeScript that is developed by",
  authors: [
    {
      name: "Najmul Huda Chowdhury Chayan",
      url: "https://najmulhc.vercel.app",
    },
  ],
  icons: [
    "/logo.svg"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Footer />
          <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  );
}
