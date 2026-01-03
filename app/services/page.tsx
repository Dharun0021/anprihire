"use client"

import { motion } from "framer-motion"
import { Cpu, Users, Building2, Briefcase, CheckCircle, GraduationCap } from "lucide-react"
import Image from "next/image"
import PageHero from "@/components/page-hero"

export default function Services() {
  const serviceDetails = [
    {
      id: "it-staffing",
      icon: <Cpu className="w-8 h-8" />,
      title: "IT Staffing Solutions",
      desc: "In the rapidly evolving tech landscape, finding specialized talent is crucial. We source high-caliber professionals for roles including Software Engineering, Cybersecurity, Cloud Infrastructure, AI/ML, and Data Analytics.",
      image: "/software-developer-working-at-modern-office-desk-w.jpg",
      features: [
        "Technical screening & testing",
        "Project-based specialized roles",
        "Support for niche technologies",
        "Rapid talent turnaround",
      ],
    },
    {
      id: "non-it-staffing",
      icon: <Users className="w-8 h-8" />,
      title: "Non-IT Staffing Solutions",
      desc: "Building a balanced organization requires excellence across all departments. We provide expert recruitment for Finance, Marketing, Sales, Human Resources, Operations, and Logistics.",
      image: "/professional-business-team-meeting-in-modern-confe.jpg",
      features: [
        "Domain-specific recruitment",
        "Executive search",
        "Industry-vetted talent",
        "Cultural fit assessment",
      ],
    },
    {
      id: "permanent-hiring",
      icon: <Briefcase className="w-8 h-8" />,
      title: "Permanent Hiring",
      desc: "Our long-term recruitment strategy focuses on finding leaders who will drive your company forward. We manage the entire lifecycle from sourcing to final onboarding.",
      image: "/professional-handshake-in-corporate-office-after-s.jpg",
      features: [
        "Direct hire placement",
        "Comprehensive background checks",
        "Executive headhunting",
        "Post-hire follow-ups",
      ],
    },
    {
      id: "contract-staffing",
      icon: <Building2 className="w-8 h-8" />,
      title: "Contract Staffing",
      desc: "Manage your workload fluctuations with our flexible contract solutions. Ideal for specialized projects, seasonal demands, or interim coverage during permanent searches.",
      image: "/modern-office-building-with-busy-professionals-wor.jpg",
      features: [
        "Flexible engagement models",
        "Payroll management",
        "Compliant onboarding",
        "Project-specific experts",
      ],
    },
    {
      id: "bulk-campus-hiring",
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Bulk / Campus Hiring",
      desc: "Efficient large-scale recruitment drives for fresh talent and rapid expansion. We bridge the gap between academic excellence and corporate requirements.",
      image: "/group-of-happy-graduates-in-corporate-setting.jpg",
      features: [
        "Mass recruitment drives",
        "University partnerships",
        "Initial skill assessment",
        "Onboarding & training support",
      ],
    },
  ]

  return (
    <div className="pb-24">
      <PageHero
        title="Our Services"
        image="/professional-business-team-meeting-in-modern-confe.jpg"
        imageAlt="Our staffing services"
      />

      <div className="container mx-auto px-6 pt-20">
        <div className="space-y-32">
          {serviceDetails.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-16 items-center`}
            >
              <div className="flex-1 w-full relative aspect-video md:aspect-square rounded-2xl overflow-hidden bg-muted shadow-xl border border-border/50">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <div className="flex-1 space-y-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary">
                  {service.icon}
                </div>
                <h2 className="text-4xl font-bold">{service.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{service.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
