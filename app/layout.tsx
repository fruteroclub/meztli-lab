import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Meztli Lab - Hacker House para ETH Cinco de Mayo",
  description:
    "Únete a la hacker house más dulce de la ciudad para ETH Cinco de Mayo, organizada por Meztli Lab. Construye, aprende y conecta con la comunidad.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


import './globals.css'