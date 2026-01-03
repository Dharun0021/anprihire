"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Building2, Users, Clock, Target } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import PageHero from "@/components/page-hero"

export default function HireTalent() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    toast({
      title: "Request Submitted!",
      description: "Our recruitment team will reach out to you within 24 hours.",
    })
  }

  return (
    <div className="pb-24">
      <PageHero
        title="Hire Talent"
        image="/professional-handshake-in-corporate-office-after-s.jpg"
        imageAlt="Partner with us"
      />

      <div className="container mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl font-bold mb-8"
            >
              Let Us Find Your <br />
              <span className="text-primary">Perfect Talent Match</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground mb-12 leading-relaxed"
            >
              Tell us about your hiring needs, and our expert recruitment team will connect you with pre-vetted,
              qualified professionals who match your requirements and company culture.
            </motion.p>

            <div className="space-y-8">
              {[
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Precision Matching",
                  desc: "We use advanced screening to ensure only the best candidates reach you.",
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "Fast Turnaround",
                  desc: "Receive qualified candidate profiles within 48 hours of your request.",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Extensive Network",
                  desc: "Access our pool of 10,000+ verified IT and Non-IT professionals.",
                },
                {
                  icon: <Building2 className="w-6 h-6" />,
                  title: "Industry Expertise",
                  desc: "Specialized recruiters for every sector and skill level.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 text-primary">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-10 rounded-2xl shadow-xl border border-muted"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Request Received!</h2>
                <p className="text-muted-foreground mb-8">
                  Thank you for choosing AnPri Hire Connetra. Our recruitment specialists will analyze your requirements
                  and contact you shortly with suitable candidate profiles.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-8">Tell Us Your Hiring Needs</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Acme Corp" required className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Your Name</Label>
                    <Input id="contact-name" placeholder="John Doe" required className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@company.com" required className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" required className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Position / Role Required</Label>
                    <Input id="role" placeholder="e.g. Senior Full Stack Developer" required className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="count">Number of Positions</Label>
                    <Input id="count" type="number" placeholder="1" min="1" required className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="requirements">Additional Requirements</Label>
                    <Textarea
                      id="requirements"
                      placeholder="Describe skills, experience level, project details, timeline, etc."
                      rows={4}
                      className="resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary h-14 text-lg">
                    Submit Request
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
