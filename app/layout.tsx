import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ゴールデンカジノ | 最高級のオンラインカジノ体験",
  description:
    "豪華な雰囲気と興奮に満ちたゲームで、忘れられない時間をお過ごしください。初回登録で¥10,000のボーナスをプレゼント！",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} disableTransitionOnChange={true}>
          <Navbar />
          <div className="flex-grow pt-16">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
