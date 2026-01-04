"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu, Users, Building2, Briefcase, GraduationCap, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <div className="w-full pt-[72px]">
      {/* SECTION 1: HERO */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#001738] text-white">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 className="text-4xl md:text-4xl font-medium tracking-tight mb-6">
              Anpri Hire Connetra Contract Staffing Agency in Pan India
            </motion.h1>
            <div className="flex items-center justify-center gap-2 text-sm md:text-base text-white/70 font-medium">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>{">"}</span>
              <span className="text-white">Contract Staffing Agency in Pan India</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: ABOUT SNAPSHOT */}
      <section className="py-24 bg-white border-y border-muted">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider mb-6">
                Our Legacy
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Expertise Driven by Global Trust</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With over a decade of experience, we have built a reputation for delivering exceptional staffing
                solutions across continents. Our commitment to quality and integrity makes us the preferred partner for
                Fortune 500 companies and emerging startups alike.
              </p>
              <Link href="/about" className="text-foreground font-bold flex items-center gap-2 group">
                Learn more about our mission{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/professional-office-meeting.jpg"
                alt="Professional team meeting"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES OVERVIEW */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Staffing Solutions</h2>
            <p className="text-muted-foreground">
              Tailored recruitment services designed to meet the dynamic needs of your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="w-10 h-10" />,
                title: "IT Staffing",
                desc: "Expert recruitment for software, infrastructure, and emerging tech roles.",
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Non-IT Staffing",
                desc: "Specialized hiring for finance, marketing, HR, and operations.",
              },
              {
                icon: <Briefcase className="w-10 h-10" />,
                title: "Permanent Hiring",
                desc: "Building long-term success with full-time executive and staff placements.",
              },
              {
                icon: <Building2 className="w-10 h-10" />,
                title: "Contract Staffing",
                desc: "Flexible workforce solutions for project-based or seasonal requirements.",
              },
              {
                icon: <GraduationCap className="w-10 h-10" />,
                title: "Bulk / Campus Hiring",
                desc: "Efficient large-scale recruitment drives for fresh talent and rapid expansion.",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-10 rounded-xl border border-muted hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-primary mb-6 transition-transform group-hover:scale-110 duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Why Businesses <br />
                <span className="text-primary">Trust AnPri Hire Connetra</span>
              </h2>
              <div className="space-y-8">
                {[
                  { title: "Industry Expertise", desc: "Deep knowledge across IT and specialized business sectors." },
                  {
                    title: "Verified Talent Pool",
                    desc: "Rigorously screened candidates ready to deliver impact from day one.",
                  },
                  {
                    title: "Fast Hiring Process",
                    desc: "Streamlined workflows that reduce time-to-hire by up to 40%.",
                  },
                  {
                    title: "Client-Centric Approach",
                    desc: "Personalized service that aligns with your culture and goals.",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="mt-1 text-primary">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-muted rounded-xl h-64 relative overflow-hidden">
                  <Image src="/diverse-professionals.jpg" alt="Team" fill className="object-cover" />
                </div>
                <div className="bg-primary text-white p-8 rounded-xl">
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-sm uppercase tracking-wider font-medium opacity-80">Client Retention</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-secondary text-white p-8 rounded-xl">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-sm uppercase tracking-wider font-medium opacity-80">Global Placements</div>
                </div>
                <div className="bg-muted rounded-xl h-64 relative overflow-hidden">
                  <Image src="/modern-office-space.png" alt="Office" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PROCESS FLOW */}
      <section className="py-24 bg-secondary text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Seamless Process</h2>
            <p className="text-white/60">How we deliver excellence, step by step.</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2" />
            <div className="grid md:grid-cols-4 gap-12 relative z-10">
              {[
                { step: "01", title: "Understand", desc: "Deep dive into your technical and cultural requirements." },
                { step: "02", stepName: "Source", desc: "Leveraging our global network to find the perfect match." },
                { step: "03", stepName: "Screen", desc: "Rigorous multi-stage verification and skill assessment." },
                { step: "04", stepName: "Deliver", desc: "Onboarding and post-placement support for lasting success." },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="text-center space-y-4"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4 shadow-lg shadow-primary/20">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold">{item.stepName || item.title}</h3>
                  <p className="text-white/60 leading-relaxed px-4">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CALL TO ACTION */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Looking for the Right Talent?</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
              Partner with us today and experience a faster, more effective way to build your dream team.
            </p>
            <Link href="/hire-talent">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 px-10 h-16 text-xl font-bold rounded-sm"
              >
                Request Talent Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
