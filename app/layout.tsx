import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Six_Caps } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const sixCaps = Six_Caps({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BestWeather",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 notranslate"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Six+Caps&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
