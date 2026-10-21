
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Transport AI | Diseño Web para Empresas",
  description:
    "Diseño web profesional, soluciones digitales e inteligencia artificial para empresas. Descubre las posibilidades de Transport AI.",
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
