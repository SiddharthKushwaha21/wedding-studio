"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Play,
  Camera,
  Film,
} from "lucide-react";

const portfolioItems = [
  {
    title: "Royal Wedding Ceremony",
    category: "Wedding Photography",
    image:
      "https://res.cloudinary.com/dojs87lwo/image/upload/v1779309383/amish-thakkar-BEdxXAiRfRM-unsplash_dkuodh.jpg",
    icon: Camera,
  },
  {
    title: "Cinematic Couple Portrait",
    category: "Pre-Wedding Shoot",
    image:
      "https://res.cloudinary.com/dojs87lwo/image/upload/v1779309615/jonathan-borba-aC5_EFhq7Fs-unsplash_eoahos.jpg",
    icon: Camera,
  },
  {
    title: "Luxury Bridal Portrait",
    category: "Bridal Photography",
    image:
      "https://res.cloudinary.com/dojs87lwo/image/upload/v1779310562/pexels-framesbygaurav-36102587_dtyzoo.jpg",
    icon: Camera,
  },
  {
    title: "Grand Reception Night",
    category: "Wedding Films",
    image:
      "https://res.cloudinary.com/dojs87lwo/image/upload/v1779311064/pexels-jonathanborba-19841040_ianvg9.jpg",
    icon: Film,
  },
  {
    title: "Destination Wedding",
    category: "Drone Coverage",
    image:
      "https://res.cloudinary.com/dojs87lwo/image/upload/v1779311773/cscs_qw7ygz.jpg",
    icon: Play,
  },
  {
    title: "Traditional Ceremony",
    category: "Candid Moments",
    image:
      "https://res.cloudinary.com/dojs87lwo/image/upload/f_auto,q_auto/v1778993762/portfolio-2_lfcgee.jpg",
    icon: Camera,
  },
];

const MotionLink = motion(Link);

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-black py-24 pt-36 text-white md:py-32 md:pt-44"
    >
      {/* Background Effects */}
      <div className="absolute left-0 top-20 h-[700px] w-[700px] rounded-full bg-amber-500/10 blur-[180px]" />
      <div className="absolute right-0 top-1/3 h-[600px] w-[600px] rounded-full bg-yellow-400/10 blur-[160px]" />
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

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mx-auto mb-16 max-w-5xl text-center sm:mb-20 lg:mb-24"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-gradient-to-r from-amber-400/10 to-yellow-500/10 px-4 py-2 backdrop-blur-2xl sm:px-6 sm:py-3">
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-300 sm:text-xs sm:tracking-[0.4em]">
              Our Portfolio
            </span>
          </div>

          <h2 className="mb-8 text-4xl font-bold leading-tight sm:text-5xl md:text-7xl lg:text-8xl">
            Love Stories
            <span className="block bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
              We Captured
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8 md:text-xl">
            A curated collection of timeless wedding memories,
            emotional moments, and cinematic masterpieces.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid gap-6 sm:gap-8 lg:gap-10 md:grid-cols-2 xl:grid-cols-3">
          {portfolioItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Outer Glow */}
                <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-br from-amber-400/0 via-amber-400/5 to-yellow-400/0 opacity-0 blur-2xl transition-all duration-700 group-hover:opacity-100" />

                {/* Card */}
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
                  {/* Image Container - auto height according to image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.title} - ${item.category}`}
                      width={800}
                      height={1200}
                      quality={100}
                      unoptimized
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="h-auto w-full transition-transform duration-1000 ease-out group-hover:scale-105"
                      priority={index < 3}
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/20 transition-all duration-700 group-hover:bg-black/10" />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    {/* Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                    {/* Floating Category Badge */}
                    <div className="absolute left-4 top-4 inline-flex max-w-[calc(100%-2rem)] items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-2 backdrop-blur-xl sm:left-6 sm:top-6 sm:px-4 sm:py-2">
                      <Icon className="h-4 w-4 shrink-0 text-amber-300" />
                      <span className="truncate text-[9px] font-semibold uppercase tracking-[0.15em] text-amber-300 sm:text-[11px] sm:tracking-[0.25em]">
                        {item.category}
                      </span>
                    </div>

                    {/* Bottom Content Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                      <div className="flex items-end justify-between gap-4">
                        <h3 className="max-w-[70%] text-lg font-bold leading-tight text-white sm:max-w-[75%] sm:text-xl md:text-2xl">
                          {item.title}
                        </h3>

                        {/* <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-45 group-hover:border-amber-300 group-hover:bg-amber-400 group-hover:text-black md:h-14 md:w-14">
                          <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
                        </div> */}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Glow */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-amber-400/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-16 flex justify-center sm:mt-20 lg:mt-24"
        >
          <MotionLink
            href="/gallery"
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center justify-center"
          >
            <div className="absolute -inset-3 rounded-full bg-amber-400/20 blur-2xl opacity-0 transition-all duration-700 group-hover:opacity-100" />

            <div className="relative overflow-hidden rounded-full border border-amber-400/30 bg-gradient-to-r from-[#1a1206] via-[#2a1a05] to-[#1a1206] px-6 py-3 shadow-[0_0_40px_rgba(251,191,36,0.12)] backdrop-blur-2xl md:px-8 md:py-4">
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-amber-200/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

              <div className="absolute inset-[1px] rounded-full border border-amber-300/10" />

              <div className="relative z-10 flex items-center gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300 sm:text-[10px] md:text-xs md:tracking-[0.28em]">
                  View All Photos & Videos
                </span>

                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-300/20 bg-amber-400/10 text-amber-300 transition-all duration-500 group-hover:translate-x-1 group-hover:rotate-45 group-hover:bg-amber-400 group-hover:text-black md:h-9 md:w-9">
                  <ArrowUpRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
                </div>
              </div>
            </div>
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
}
