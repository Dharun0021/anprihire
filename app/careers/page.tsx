"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, CheckCircle, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import PageHero from "@/components/page-hero"
import emailjs from "@emailjs/browser"

export default function Careers() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    setIsLoading(true)

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_id",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_id",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key",
      )

      setIsSubmitted(true)
      toast({
        title: "Resume Submitted!",
        description: "We'll review your profile and get back to you soon.",
      })
    } catch (error) {
      console.error("[v0] EmailJS Error:", error)
      toast({
        title: "Submission Failed",
        description: "There was an error sending your application. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="pb-24">
      <PageHero
        title="Careers"
        image="/modern-office-building-with-busy-professionals-wor.jpg"
        imageAlt="Work with us"
      />

      <div className="container mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl font-bold mb-8"
            >
              Find Your <br />
              <span className="text-primary">Dream Career</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground mb-12 leading-relaxed"
            >
              We help you find the right opportunity that aligns with your skills, passion, and career aspirations. Join
              our talent pool and let our experts find the perfect match for you.
            </motion.p>

            <div className="space-y-8">
              {[
                { title: "Global Reach", desc: "Access opportunities with top companies across the globe." },
                {
                  title: "Personalized Matching",
                  desc: "We don't just look at keywords, we look at your career potential.",
                },
                { title: "Skill Enhancement", desc: "Expert advice on how to improve your professional profile." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
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
                <h2 className="text-3xl font-bold mb-4">Application Received!</h2>
                <p className="text-muted-foreground mb-8">
                  Thank you for submitting your resume. Our recruitment team will review your profile and contact you if
                  there's a matching opportunity.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                  Submit Another Resume
                </Button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-8">Submit Your Resume</h2>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="user_name" placeholder="John Doe" required className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="user_email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Desired Role / Department</Label>
                    <Input
                      id="role"
                      name="desired_role"
                      placeholder="e.g. Senior Frontend Developer"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume Upload</Label>
                    <div className="border-2 border-dashed border-muted rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer group">
                      <Upload className="w-8 h-8 mx-auto text-muted-foreground group-hover:text-primary mb-3 transition-colors" />
                      <p className="text-sm font-medium">Click to upload or drag and drop</p>
                      <p className="text-xs text-muted-foreground mt-1">PDF, DOCX up to 5MB</p>
                      <input type="file" className="hidden" id="resume-file" />
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-primary h-14 text-lg" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Application"
                    )}
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
