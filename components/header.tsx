"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-sm py-3" : "bg-white py-4",
      )}
    >
      <div className="container mx-auto px-2 flex items-center justify-between h-16 relative">
        <Link href="/" className="flex items-center gap-0 shrink-0 overflow-visible z-10">
          <div className="relative w-35 h-35 shrink-0 -my-2">
            <Image
              src="/logo/mainlogo.png"
              alt="AnPri Hire Connetra Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col -ml-4">
            <span className="font-bold text-sm md:text-base tracking-tight text-foreground uppercase leading-tight">
              ANPRI HIRE <span className="text-primary font-black">CONNETRA</span>
            </span>
            <span className="text-[10px] md:text-xs text-muted-foreground font-medium italic tracking-wide">
              The Team That Delivers Talent
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-primary whitespace-nowrap",
                pathname === link.href ? "text-primary" : "text-foreground/70",
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block shrink-0 mr-4 z-10">
          <Link href="/hire-talent">
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-white px-6 rounded-sm">
              Hire Talent
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-40 md:hidden flex flex-col pt-24 px-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-semibold py-4 border-b border-muted hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-8">
              <Link href="/hire-talent" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-primary py-6 text-lg">Hire Talent</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
