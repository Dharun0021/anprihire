import type React from "react"
import type { Metadata } from "next"
// <CHANGE> Replaced Geist fonts with Poppins for entire site
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css"

// <CHANGE> Using Poppins font with multiple weights for better typography
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: "AnPri Hire Connetra | The Team That Delivers Talent",
  description:
    "AnPri Hire Connetra Private Limited provides premier IT and Non-IT staffing solutions. Connecting world-class talent with industry leaders.",
  generator: 'v0.app',
  icons: {
    icon: '/logo/mainlogo.png',
    apple: '/logo/mainlogo.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // <CHANGE> Applied Poppins font variable to html element
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className="font-sans antialiased min-h-screen flex flex-col selection:bg-primary/20">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
