import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Realidad nacional - Grupo 2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
