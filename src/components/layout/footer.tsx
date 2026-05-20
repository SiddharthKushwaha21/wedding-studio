"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  Sparkles,
  Camera,
  Heart,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import { siteConfig } from "@/data/site";

const socialLinks = [
  {
    name: "Instagram",
    href: siteConfig.socialLinks.instagram,
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: siteConfig.socialLinks.facebook,
    icon: FaFacebookF,
  },
  {
    name: "YouTube",
    href: siteConfig.socialLinks.youtube,
    icon: FaYoutube,
  },
  {
    name: "WhatsApp",
    href: `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`,
    icon: FaWhatsapp,
  },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Packages", href: "/#packages" },
  { name: "Contact", href: "/#contact" },
];

const features = [
  "Cinematic Wedding Films",
  "Luxury Photography",
  "Drone Coverage",
  "Same Day Reels",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative z-10">
        {/* Top CTA Section */}
        <div className="border-b border-white/10">
          <div className="container mx-auto px-4 sm:px-6 py-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 md:p-12 backdrop-blur-2xl"
            >
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2">
                    <Sparkles className="h-4 w-4 text-amber-300" />
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
                      Let&apos;s Create Magic
                    </span>
                  </div>

                  <h2 className="mb-4 text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
                    Ready to Capture
                    <span className="block bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
                      Your Love Story?
                    </span>
                  </h2>

                  <p className="max-w-2xl text-sm sm:text-base leading-7 sm:leading-8 text-gray-400">
                    Elegant photography and cinematic wedding films crafted to
                    preserve every magical moment forever.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-4 lg:justify-end">
                  <Link
                    href="/#contact"
                    className="group inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-8 py-4 font-semibold text-black shadow-2xl shadow-amber-500/25 transition-all duration-500 hover:scale-105"
                  >
                    Book Your Date
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>

                  <Link
                    href="/#portfolio"
                    className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:bg-white/10"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="container mx-auto px-4 sm:px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2"
            >
              <Link
                href="/"
                className="mb-6 inline-flex items-center gap-3 sm:gap-4"
              >
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-300 shrink-0">
                  <Camera className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                    <span className="text-white">The Royal </span>
                    <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
                      Pixel
                    </span>
                  </h3>

                  <p className="text-[10px] sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.35em] text-amber-300/80">
                    Wedding Films Studio
                  </p>
                </div>
              </Link>

              <p className="mb-6 max-w-2xl text-sm sm:text-base leading-7 sm:leading-8 text-gray-400">
                We create timeless wedding photographs and cinematic films that
                preserve your emotions, memories, and most cherished moments
                forever.
              </p>

              {/* Premium Feature Pills */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -6,
                      scale: 1.04,
                    }}
                    className="group relative overflow-hidden rounded-full"
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/0 via-amber-400/30 to-yellow-500/0 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />

                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                    <div className="relative flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 sm:px-6 py-2.5 sm:py-3 backdrop-blur-2xl transition-all duration-500 group-hover:border-amber-400/40 group-hover:bg-white/[0.08] group-hover:shadow-xl group-hover:shadow-amber-500/10">
                      <div className="relative flex h-2.5 w-2.5 items-center justify-center shrink-0">
                        <span className="absolute h-2.5 w-2.5 rounded-full bg-amber-300 transition-all duration-500 group-hover:scale-125" />
                        <span className="absolute h-2.5 w-2.5 rounded-full bg-amber-300/60 blur-sm transition-all duration-500 group-hover:scale-[2.5]" />
                      </div>

                      <span className="text-xs sm:text-sm font-medium text-gray-300 transition-all duration-500 group-hover:text-white">
                        {feature}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h4 className="mb-6 text-lg sm:text-xl font-semibold">
                Quick Links
              </h4>

              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                  >
                    <Link
                      href={link.href}
                      className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-transparent px-4 py-3 text-sm sm:text-base text-gray-400 transition-all duration-500 hover:border-amber-400/20 hover:bg-white/[0.04] hover:text-white hover:shadow-lg hover:shadow-amber-500/10"
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-yellow-500/0 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />

                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                      <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/5 transition-all duration-500 group-hover:scale-110 group-hover:bg-amber-400/10 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]">
                        <ArrowUpRight className="h-4 w-4 text-amber-300 opacity-60 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                      </div>

                      <span className="relative font-medium tracking-wide transition-all duration-500 group-hover:translate-x-1">
                        {link.name}
                      </span>

                      <span className="relative ml-auto h-2 w-2 rounded-full bg-amber-300/0 transition-all duration-500 group-hover:bg-amber-300 group-hover:shadow-[0_0_12px_rgba(251,191,36,0.9)]" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact & Social */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h4 className="mb-6 text-lg sm:text-xl font-semibold">
                Contact Info
              </h4>

              <div className="space-y-3">
                <a
                  href={`tel:${siteConfig.phone.replace(/\\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-start gap-3 overflow-hidden rounded-2xl border border-transparent px-4 py-3 text-sm sm:text-base text-gray-400 transition-all duration-500 hover:border-amber-400/20 hover:bg-white/[0.04] hover:text-white hover:shadow-lg hover:shadow-amber-500/10"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-yellow-500/0 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />

                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                  <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/5 transition-all duration-500 group-hover:scale-110 group-hover:bg-amber-400/10">
                    <Phone className="h-4 w-4 text-amber-300 transition-transform duration-500 group-hover:rotate-6" />
                  </div>

                  <span className="relative font-medium transition-all duration-500 group-hover:translate-x-1">
                    {siteConfig.phone}
                  </span>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-start gap-3 overflow-hidden rounded-2xl border border-transparent px-4 py-3 text-sm sm:text-base text-gray-400 transition-all duration-500 hover:border-amber-400/20 hover:bg-white/[0.04] hover:text-white hover:shadow-lg hover:shadow-amber-500/10"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-yellow-500/0 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />

                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                  <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/5 transition-all duration-500 group-hover:scale-110 group-hover:bg-amber-400/10 shrink-0">
                    <Mail className="h-4 w-4 text-amber-300 transition-transform duration-500 group-hover:rotate-6" />
                  </div>

                  <span className="relative break-all font-medium transition-all duration-500 group-hover:translate-x-1">
                    {siteConfig.email}
                  </span>
                </a>

                <a
                  href={siteConfig.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-start gap-3 overflow-hidden rounded-2xl border border-transparent px-4 py-3 text-sm sm:text-base text-gray-400 transition-all duration-500 hover:border-amber-400/20 hover:bg-white/[0.04] hover:text-white hover:shadow-lg hover:shadow-amber-500/10"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-yellow-500/0 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />

                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                  <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/5 transition-all duration-500 group-hover:scale-110 group-hover:bg-amber-400/10 shrink-0">
                    <MapPin className="h-4 w-4 text-amber-300 transition-transform duration-500 group-hover:rotate-6" />
                  </div>

                  <span className="relative font-medium transition-all duration-500 group-hover:translate-x-1">
                    {siteConfig.address.city}, {siteConfig.address.state}
                  </span>
                </a>
              </div>

              {/* Social Icons */}
              <div className="mt-8 flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  if (social.name === "WhatsApp") {
                    return (
                      <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 backdrop-blur-xl transition-all duration-500 hover:scale-110 hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-300 hover:shadow-lg hover:shadow-amber-500/20"
                      >
                        <Icon className="h-5 w-5 transition-transform duration-500 group-hover:rotate-6" />
                      </Link>
                    );
                  }

                  return (
                    <button
                      key={social.name}
                      type="button"
                      aria-label={social.name}
                      className="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 backdrop-blur-xl transition-all duration-500 hover:scale-110 hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-300 hover:shadow-lg hover:shadow-amber-500/20"
                    >
                      <Icon className="h-5 w-5 transition-transform duration-500 group-hover:rotate-6" />
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:px-6 py-6 text-center md:flex-row md:text-left text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} The Royal Pixel. All rights
              reserved.
            </p>

            <div className="flex items-center gap-2 text-gray-400">
              <Heart className="h-4 w-4 text-amber-300 shrink-0" />
              <span>Crafted with passion for timeless memories.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

