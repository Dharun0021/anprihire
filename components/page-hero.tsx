"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface PageHeroProps {
  title: string
  image: string
  imageAlt: string
}

export default function PageHero({ title, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative bg-[#001A3D] overflow-hidden min-h-[400px] flex items-center pt-24">
      <div className="container mx-auto px-6 relative z-10 py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-white text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
            >
              {title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-white/70 font-medium"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight size={16} className="text-white/40" />
              <span className="text-white">{title}</span>
            </motion.div>
          </div>

          {/* Arched Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            className="flex-1 w-full max-w-[500px] relative h-[300px] md:h-[400px]"
          >
            <div className="absolute inset-0 rounded-l-[200px] rounded-r-2xl overflow-hidden border-8 border-white/5 shadow-2xl">
              <Image src={image || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" priority />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-24 -z-0" />
    </section>
  )
}
