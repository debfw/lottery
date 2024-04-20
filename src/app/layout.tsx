"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <ColorSchemeScript />
        </head>
        <body className={inter.className}>
          {" "}
          <MantineProvider>{children}</MantineProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
