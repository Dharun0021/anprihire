import Link from "next/link"
import { Linkedin, Mail, Twitter, Instagram, MapPin, Phone, Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center text-white font-bold">
                A
              </div>
              <span className="font-bold text-xl tracking-tight uppercase">AnPri Hire Connetra</span>
            </Link>
            <p className="text-white/60 leading-relaxed font-medium italic">"The Team That Delivers Talent"</p>
            <p className="text-white/60 leading-relaxed text-sm">
              Connecting world-class IT and Non-IT talent with industry leaders through precision and passion.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-white/60 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/60 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/60 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Services</h4>
            <ul className="space-y-4">
              <li className="text-white/60">IT Staffing</li>
              <li className="text-white/60">Non-IT Staffing</li>
              <li className="text-white/60">Executive Search</li>
              <li className="text-white/60">Campus Recruitment</li>
              <li className="text-white/60">Contract Staffing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-white/60">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>
                  42-3, Hosa Road, Basapura, Chikka Thogur Main raod, Electronics City, Bangalore South,
                  Bangalore-560100, Karnataka
                </span>
              </li>
              <li className="flex gap-3 text-white/60">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p>+91 81481 77703 (Recruitment)</p>
                  <p>+91 80559 77492 (Accounts)</p>
                </div>
              </li>
              <li className="flex gap-3 text-white/60">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:anprihireconnetra@gmail.com" className="hover:text-primary transition-colors">
                  anprihireconnetra@gmail.com
                </a>
              </li>
              <li className="flex gap-3 text-white/60">
                <Globe className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="https://anprihireconnetra.com"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                  rel="noreferrer"
                >
                  anprihireconnetra.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} AnPri Hire Connetra Private Limited. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
