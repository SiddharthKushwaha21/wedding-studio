"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Check,
  ArrowUpRight,
  Crown,
  Gem,
  Star,
  ShieldCheck,
} from "lucide-react";

const packages = [
  {
    name: "Silver",
    icon: Star,
    price: "₹1,10,000",
    accent: "from-slate-500/10 via-transparent to-transparent",
    description:
      "A complete wedding photography and cinematography package designed to beautifully capture your Wedding Ceremony, Haldi, and Mehndi celebrations with premium albums, cinematic videos, reels, teaser, highlights, and a large photo frame.",
    features: [
      "Wedding Ceremony Coverage",
      "Haldi Ceremony Coverage",
      "Mehndi Ceremony Coverage",
      "Candid Cinematic Shoot (Wedding + Haldi)",
      "Traditional Photography & Videography for All Wedding Day Functions",
      "Drone Coverage on Wedding Day",
      "Premium Album (50 Sheets, 14x40, 2-in-1 Combo)",
      "Full HD Video of All Functions in Pen Drive",
      "2 Professionally Edited Reels",
      "1 Cinematic Teaser",
      "1 Wedding Highlights Film",
      "1 Premium Photo Frame (20x30)",
    ],
    popular: false,
  },
  {
    name: "Gold",
    icon: Crown,
    price: "₹1,75,000",
    accent: "from-amber-400/10 via-transparent to-transparent",
    description:
      "Our most popular wedding package includes everything in the Silver package along with a complete pre-wedding shoot package, including travel, hotel, food, bike, and makeup artist expenses.",
    features: [
      "Wedding Ceremony Coverage",
      "Haldi Ceremony Coverage",
      "Mehndi Ceremony Coverage",
      "Candid Cinematic Shoot (Wedding + Haldi)",
      "Traditional Photography & Videography for All Wedding Day Functions",
      "Drone Coverage on Wedding Day",
      "Premium Album (50 Sheets, 14x40, 2-in-1 Combo)",
      "Full HD Video of All Functions in Pen Drive",
      "2 Professionally Edited Reels",
      "1 Cinematic Teaser",
      "1 Wedding Highlights Film",
      "1 Premium Photo Frame (20x30)",
      "Pre-Wedding Shoot",
      "Travel Expenses Included",
      "Hotel Stay Included",
      "Food Expenses Included",
      "Bike Arrangement Included",
      "Professional Makeup Artist Included",
    ],
    popular: true,
  },
  {
    name: "Platinum",
    icon: Gem,
    price: "₹2,15,000",
    accent: "from-purple-400/10 via-transparent to-transparent",
    description:
      "The ultimate luxury wedding package featuring everything in the Gold package plus a breathtaking Bride Mirror Entry setup for a grand and unforgettable stage entrance.",
    features: [
      "Wedding Ceremony Coverage",
      "Haldi Ceremony Coverage",
      "Mehndi Ceremony Coverage",
      "Candid Cinematic Shoot (Wedding + Haldi)",
      "Traditional Photography & Videography for All Wedding Day Functions",
      "Drone Coverage on Wedding Day",
      "Premium Album (50 Sheets, 14x40, 2-in-1 Combo)",
      "Full HD Video of All Functions in Pen Drive",
      "2 Professionally Edited Reels",
      "1 Cinematic Teaser",
      "1 Wedding Highlights Film",
      "1 Premium Photo Frame (20x30)",
      "Pre-Wedding Shoot",
      "Travel Expenses Included",
      "Hotel Stay Included",
      "Food Expenses Included",
      "Bike Arrangement Included",
      "Professional Makeup Artist Included",
      "Luxury Bride Mirror Entry Stage Setup",
    ],
    popular: false,
  },
];

const MotionLink = motion(Link);

export default function PackagesSection() {
  return (
    <section
      id="packages"
      className="relative overflow-hidden bg-black py-20 text-white md:py-32"
    >
      {/* Background Glow Effects */}
      <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-amber-500/10 blur-[180px]" />
      <div className="absolute right-0 top-1/3 h-[650px] w-[650px] rounded-full bg-yellow-400/10 blur-[180px]" />
      <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber-300/5 blur-[140px]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mx-auto mb-16 max-w-5xl text-center md:mb-24"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-gradient-to-r from-amber-400/10 to-yellow-500/10 px-6 py-3 backdrop-blur-2xl">
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-300">
              Wedding Packages
            </span>
          </div>

          <h2 className="mb-8 text-4xl font-bold leading-tight sm:text-5xl md:text-7xl lg:text-8xl">
            Choose the Perfect
            <span className="block bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
              Package for Your Wedding
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Luxury photography and cinematic storytelling packages tailored to
            preserve your most precious moments forever.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid gap-10 lg:grid-cols-3">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;

            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -12, scale: 1.02 }}
                className={`group relative ${
                  pkg.popular ? "lg:-mt-6 lg:mb-6" : ""
                }`}
              >
                {/* Premium Glow */}
                <div className="absolute -inset-2 rounded-[2.5rem] bg-amber-400/10 blur-2xl opacity-0 transition-all duration-700 group-hover:opacity-100" />

                {/* Most Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-5 left-1/2 z-30 -translate-x-1/2 rounded-full border border-amber-300/30 bg-amber-400 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-black shadow-[0_10px_40px_rgba(251,191,36,0.45)]">
                    Most Popular
                  </div>
                )}

                {/* Card */}
                <div
                  className={`relative h-full overflow-hidden rounded-[2.5rem] border backdrop-blur-2xl ${
                    pkg.popular
                      ? "border-amber-400/30 bg-gradient-to-b from-amber-400/10 via-white/[0.03] to-black"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  {/* Top Shine */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                  {/* Inner Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${pkg.accent} opacity-60`}
                  />

                  <div className="relative z-10 p-8 md:p-10">
                    {/* Icon */}
                    <div className="mb-8 inline-flex h-18 w-18 items-center justify-center rounded-3xl border border-amber-300/20 bg-amber-400/10 p-5 text-amber-300 shadow-[0_0_30px_rgba(251,191,36,0.12)]">
                      <Icon className="h-8 w-8" />
                    </div>

                    {/* Package Name */}
                    <h3 className="mb-4 text-3xl font-bold">{pkg.name}</h3>

                    {/* Price */}
                    <div className="mb-4 text-4xl font-bold text-amber-300 sm:text-5xl">
                      {pkg.price}
                    </div>

                    {/* Description */}
                    <p className="mb-8 leading-8 text-gray-300">
                      {pkg.description}
                    </p>

                    {/* Trust Badge */}
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-300/10 bg-amber-400/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-amber-300">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Premium Quality Guaranteed
                    </div>

                    {/* Features */}
                    <ul className="mb-10 space-y-4">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400/15 text-amber-300">
                            <Check className="h-3 w-3" />
                          </div>
                          <span className="leading-7 text-gray-200">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <MotionLink
                      href="/#contact"
                      scroll={true}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`group/button relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full px-6 py-4 font-semibold transition-all duration-500 ${
                        pkg.popular
                          ? "bg-amber-400 text-black shadow-[0_10px_40px_rgba(251,191,36,0.35)]"
                          : "border border-amber-400/20 bg-amber-400/10 text-amber-300 hover:bg-amber-400 hover:text-black"
                      }`}
                    >
                      <span className="relative z-10">Book This Package</span>
                      <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-500 group-hover/button:translate-x-1 group-hover/button:-translate-y-1" />
                    </MotionLink>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex justify-center md:mt-16"
        >
          <div className="group relative inline-block">
            {/* Glow Effect */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400/30 via-yellow-300/20 to-amber-400/30 opacity-0 blur-2xl transition-all duration-700 group-hover:opacity-100" />

            {/* Main Box */}
            <div className="relative rounded-full border border-amber-400/20 bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-yellow-500/10 px-6 py-3 backdrop-blur-2xl transition-all duration-500 group-hover:border-amber-300/40 group-hover:shadow-[0_0_40px_rgba(251,191,36,0.15)] md:px-8 md:py-4">
              <p className="flex flex-wrap items-center justify-center gap-2 text-center text-sm leading-relaxed text-gray-300 md:text-base">
                <Sparkles className="h-4 w-4 text-amber-300 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />

                <span>
                  Need a custom package?{" "}
                  <Link
                    href="/#contact"
                    scroll={true}
                    className="font-semibold text-amber-300 transition-colors duration-300 hover:text-amber-200"
                  >
                    Contact us for a personalized quote.
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}