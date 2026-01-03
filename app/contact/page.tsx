"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Globe } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import PageHero from "@/components/page-hero"

export default function Contact() {
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Message Sent!",
      description: "Our team will get back to you within 24 hours.",
    })
  }

  return (
    <div className="pb-24">
      <PageHero
        title="Contact Us"
        image="/professional-handshake-in-corporate-office-after-s.jpg"
        imageAlt="Get in touch"
      />

      <div className="container mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-12">
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                {
                  icon: <MapPin />,
                  title: "Our Office",
                  content:
                    "42-3, Hosa Road, Basapura, Chikka Thogur Main raod, Electronics City, Bangalore South, Bangalore-560100",
                },
                { icon: <Phone />, title: "Call Us", content: "+91 8148177703 / +91 8056977492" },
                { icon: <Mail />, title: "Email Us", content: "anprihireconnetra@gmail.com" },
                { icon: <Globe />, title: "Website", content: "anprihireconnectra.com" },
              ].map((item, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground">{item.content}</p>
                </div>
              ))}
            </div>

            <div className="h-80 bg-muted rounded-2xl relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5445214561!2d77.6596375!3d12.8726879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae135b542095f9%3A0x6b81d77d704d2e8!2sElectronics%20City%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 rounded-2xl shadow-xl border border-muted"
          >
            <h2 className="text-2xl font-bold mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" required className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" required className="h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" required className="h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">How can we help?</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your requirements..."
                  className="min-h-[150px] pt-3"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-primary h-14 text-lg">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
