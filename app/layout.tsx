import "./globals.css"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import { CartProvider } from "@/lib/cartContext"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SplashCursor from "@/components/ui/splashcursort"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Urban Spoon",
  description: "Experience culinary excellence at Urban Spoon",
}

const bgStyle = {
  backgroundImage: `url("/2.png")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <CartProvider>
        <html lang="en">
          <body className={inter.className}>
          <SplashCursor />
          <div style={bgStyle} className="overflow-x-hidden">
          <div className="min-h-screen bg-white/50 backdrop-blur-3xl">
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </div>
          </div>
          </body>
        </html>
      </CartProvider>
    </ClerkProvider>
  )
}

