"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Video,
  Heart,
  Plane,
  Film,
  Image as ImageIcon,
  Sparkles,
  Star,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Wedding Photography",
    description:
      "Timeless photographs that beautifully preserve every emotion and celebration.",
  },
  {
    icon: Video,
    title: "Cinematic Videography",
    description:
      "Movie-style wedding films crafted to tell your love story with elegance.",
  },
  {
    icon: Heart,
    title: "Pre-Wedding Shoots",
    description:
      "Romantic and creative shoots that reflect your unique love story.",
  },
  {
    icon: Plane,
    title: "Drone Coverage",
    description:
      "Breathtaking aerial shots that add cinematic grandeur to your wedding.",
  },
  {
    icon: Film,
    title: "Same Day Reels",
    description:
      "Instagram-ready reels delivered quickly to relive your magical moments.",
  },
  {
    icon: ImageIcon,
    title: "Luxury Albums",
    description:
      "Premium handcrafted albums designed to preserve memories forever.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-20 text-white md:py-28"
    >
      {/* Background Effects */}
      <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-amber-500/10 blur-3xl sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px]" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-yellow-400/10 blur-3xl sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.06),transparent_35%)]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto mb-14 max-w-4xl text-center sm:mb-16 md:mb-20"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 backdrop-blur-xl sm:mb-6 sm:px-5 sm:py-2.5">
            <Sparkles className="h-3.5 w-3.5 text-amber-300 sm:h-4 sm:w-4" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-300 sm:text-xs sm:tracking-[0.35em]">
              Our Signature Services
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:mb-6 md:text-6xl">
            Elegant Photography &
            <span className="block bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
              Cinematic Storytelling
            </span>
          </h2>

          <p className="mx-auto max-w-3xl px-2 text-base leading-7 text-gray-300 sm:px-0 sm:text-lg sm:leading-8">
            Every service is crafted to capture your emotions and transform
            your wedding into a timeless visual masterpiece.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                custom={index * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: {
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                whileTap={{ scale: 0.99 }}
                className="group relative isolate overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl transition-all duration-300 hover:z-20 hover:border-amber-400/30 hover:bg-white/[0.08] hover:shadow-[0_20px_80px_rgba(251,191,36,0.12)] sm:p-8"
                style={{
                  boxShadow: "none",
                  filter: "none",
                  willChange: "transform",
                }}
              >
                {/* Hover Gradient Overlay */}
                <div className="pointer-events-none absolute inset-0 z-0 rounded-3xl bg-gradient-to-br from-amber-400/0 via-transparent to-yellow-500/0 opacity-0 transition-opacity duration-300 group-hover:from-amber-400/5 group-hover:to-yellow-500/5 group-hover:opacity-100" />

                {/* Shine Effect */}
                <div className="pointer-events-none absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                {/* Floating Star */}
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                    rotate: [0, 8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  className="pointer-events-none absolute right-4 top-4 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:right-6 sm:top-6"
                >
                  <Star className="h-4 w-4 fill-amber-300 text-amber-300" />
                </motion.div>

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-300 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-amber-400/15 group-hover:shadow-lg group-hover:shadow-amber-500/20 sm:mb-6 sm:h-16 sm:w-16">
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-amber-100 sm:mb-4 sm:text-2xl">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-5 text-sm leading-6 text-gray-400 transition-colors duration-300 group-hover:text-gray-300 sm:mb-6 sm:text-base sm:leading-7">
                    {service.description}
                  </p>

                  {/* Bottom Feature */}
                  <div className="flex items-center gap-2 text-xs text-amber-300/90 sm:text-sm">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                    <span className="transition-all duration-300 group-hover:translate-x-1">
                      Premium Quality Guaranteed
                    </span>
                  </div>

                  {/* Bottom Glow Line */}
                  <div className="mt-5 h-px w-0 bg-gradient-to-r from-amber-400 to-yellow-500 transition-all duration-500 group-hover:w-full sm:mt-6" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}