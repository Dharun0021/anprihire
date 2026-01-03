"use client"

import { motion } from "framer-motion"
import { Target, Eye, Shield, Award, Users } from "lucide-react"
import PageHero from "@/components/page-hero"

export default function About() {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      desc: "We maintain the highest ethical standards in all our interactions.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      desc: "Striving for superior quality in every placement we make.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Commitment",
      desc: "Dedicated to the long-term success of our clients and candidates.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Growth",
      desc: "Fostering continuous development and professional evolution.",
    },
  ]

  return (
    <div className="pb-24">
      <PageHero
        title="About Us"
        image="/professional-office-meeting.jpg"
        imageAlt="Team meeting at AnPri Hire Connetra"
      />

      <div className="container mx-auto px-6 pt-20">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-muted/30 p-12 rounded-2xl"
          >
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white mb-6">
              <Target />
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To empower organizations by providing them with the most exceptional talent available globally, while
              simultaneously helping professionals reach their full potential.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-secondary text-white p-12 rounded-2xl"
          >
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white mb-6">
              <Eye />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">Our Vision</h2>
            <p className="text-white/60 text-lg leading-relaxed">
              To be the world's most trusted recruitment partner, known for our innovative approach, global reach, and
              unwavering commitment to quality and integrity.
            </p>
          </motion.div>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="bg-muted/20 p-8 md:p-12 rounded-2xl border border-muted flex flex-col justify-center h-full">
            <h3 className="text-3xl font-bold mb-6 text-primary">Precision in Every Hire</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our unique approach combines deep industry knowledge with a commitment to understanding your specific
              business DNA. We don't just fill positions; we build teams that drive success.
            </p>
            <ul className="space-y-4">
              {[
                "Tailored Candidate Sourcing",
                "Rigorous Skill Validation",
                "Cultural Fit Assessment",
                "Post-Placement Support",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">A Legacy of Excellence</h2>
            <p className="text-muted-foreground text-lg">
              We understand that every business has a unique DNA. Our approach isn't just about filling roles—it's about
              finding individuals who will thrive in your specific environment and contribute to your long-term vision.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <div className="text-primary text-4xl font-bold mb-1">10+</div>
                <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-primary text-4xl font-bold mb-1">50+</div>
                <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Global Markets
                </div>
              </div>
              <div>
                <div className="text-primary text-4xl font-bold mb-1">12k+</div>
                <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Successful Hires
                </div>
              </div>
              <div>
                <div className="text-primary text-4xl font-bold mb-1">500+</div>
                <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Active Clients
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="py-24 border-t border-muted">
          <h2 className="text-4xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted/50 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
