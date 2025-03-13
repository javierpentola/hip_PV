import type { Metadata } from "next"
import { Roboto, Noto_Sans_JP } from "next/font/google"
import "./globals.css"
import type React from "react"
import { Toaster } from "@/components/ui/toaster"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
})

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Hip Energy - Energía Limpia para Andorra",
  description:
    "Hip Energy ofrece soluciones energéticas sostenibles y asequibles para hogares y empresas en Andorra. Cambia a energía limpia y ahorra en tu factura.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${roboto.variable} ${notoSansJP.variable}`}>
      <body className="font-roboto">
        <div className="flex flex-col min-h-screen">{children}</div>
        <Toaster />
      </body>
    </html>
  )
}



import './globals.css'