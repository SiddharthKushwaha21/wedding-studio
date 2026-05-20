"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Quote,
  Sparkles,
  Star,
  Heart,
  ChevronRight,
} from "lucide-react";

const testimonials = [
  {
    name: "Aarav & Priya",
    role: "Destination Wedding Couple",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    review:
      "The Royal Pixel captured every emotion so beautifully. Our wedding film feels like a cinematic masterpiece that we will cherish forever.",
    rating: 5,
  },
  {
    name: "Rohan & Sneha",
    role: "Luxury Wedding Couple",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
    review:
      "Every photograph tells a story. Their creativity, professionalism, and attention to detail exceeded all our expectations.",
    rating: 5,
  },
  {
    name: "Karan & Ananya",
    role: "Pre-Wedding Shoot",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    review:
      "From drone shots to same day reels, everything was absolutely stunning. We could not have asked for a better team.",
    rating: 5,
  },
  {
    name: "Vikram & Meera",
    role: "Royal Wedding Ceremony",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=800&auto=format&fit=crop",
    review:
      "Their team made us feel comfortable and captured the most precious moments with elegance and perfection.",
    rating: 5,
  },
];

const stats = [
  { value: "50+", label: "Weddings Captured" },
  { value: "45+", label: "Happy Couples" },
  { value: "4.8", label: "Average Rating" },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-black py-20 md:py-32 text-white"
    >
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-20 h-[700px] w-[700px] rounded-full bg-amber-500/15 blur-[180px]" />
        <div className="absolute right-[-10%] top-1/3 h-[600px] w-[600px] rounded-full bg-yellow-400/10 blur-[160px]" />
        <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-orange-400/10 blur-[140px]" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-screen"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
        }}
      />

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mx-auto mb-16 max-w-5xl text-center md:mb-24"
        >
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-white/[0.04] px-6 py-3 backdrop-blur-2xl shadow-[0_10px_40px_rgba(251,191,36,0.12)]">
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-300">
              Client Testimonials
            </span>
          </div>

          <h2 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:mb-8 md:text-7xl lg:text-8xl">
            Cherished Words
            <span className="mt-2 block bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
              From Happy Couples
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-7 text-gray-300 md:text-xl md:leading-8">
            Real stories from couples who trusted The Royal Pixel to preserve
            their most precious memories with timeless elegance.
          </p>
        </motion.div>

        {/* Premium Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 grid gap-6 md:mb-24 md:grid-cols-3"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-2xl sm:p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-3 text-4xl font-bold text-amber-300 md:text-5xl">
                  {stat.value}
                </div>
                <p className="text-xs uppercase tracking-[0.35em] text-gray-400">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -14,
                scale: 1.03,
              }}
              className="group relative"
            >
              {/* Animated Glow */}
              <div className="absolute -inset-[2px] rounded-[2rem] bg-gradient-to-br from-amber-400/0 via-amber-300/40 to-yellow-400/0 opacity-0 blur-2xl transition-all duration-700 group-hover:opacity-100" />

              {/* Rotating Border */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 via-amber-300/10 to-white/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              {/* Card */}
              <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-3xl shadow-[0_25px_80px_rgba(0,0,0,0.45)] sm:p-8">
                {/* Shine Effect */}
                <div className="absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-1000 group-hover:left-[150%] group-hover:opacity-100" />

                {/* Floating Heart */}
                <Heart className="absolute right-6 top-6 h-4 w-4 text-amber-300/30 transition-all duration-500 group-hover:scale-125 group-hover:text-amber-300" />

                {/* Quote Icon */}
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-300 shadow-[0_0_30px_rgba(251,191,36,0.12)]">
                  <Quote className="h-6 w-6" />
                </div>

                {/* Rating */}
                <div className="mb-6 flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-300 text-amber-300"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="mb-8 text-sm leading-7 text-gray-300">
                  “{testimonial.review}”
                </p>

                {/* Divider */}
                <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/10 ring-2 ring-amber-300/20">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="truncate font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-amber-300 sm:text-[10px] sm:tracking-[0.25em]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Read More Indicator */}
                <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gray-500 transition-all duration-500 group-hover:text-amber-300">
                  <span>Trusted Experience</span>
                  <ChevronRight className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-16 flex justify-center md:mt-24"
        >
          <motion.div
            whileHover={{
              y: -6,
              scale: 1.03,
            }}
            transition={{ duration: 0.4 }}
            className="group relative"
          >
            {/* Soft Outer Glow */}
            <div className="absolute -inset-6 rounded-full bg-amber-400/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

            {/* Animated Border Glow */}
            <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-transparent via-amber-300/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            {/* Badge */}
            <div className="relative inline-flex flex-wrap items-center justify-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 text-center backdrop-blur-2xl shadow-[0_20px_60px_rgba(251,191,36,0.08)] sm:px-8">
              {/* Shine Effect */}
              <div className="absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-1000 group-hover:left-[150%] group-hover:opacity-100" />

              {/* Star Icon */}
              <Star className="relative z-10 h-4 w-4 fill-amber-300 text-amber-300 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" />

              {/* Text */}
              <span className="relative z-10 text-center text-xs font-medium text-gray-300 transition-colors duration-500 group-hover:text-white sm:text-sm">
                Rated 4.8 by 50+ Happy Couples Worldwide
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}