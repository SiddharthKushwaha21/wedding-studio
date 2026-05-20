"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  Camera,
  Video,
  Heart,
  Award,
  Sparkles,
  CheckCircle2,
  Star,
  Quote,
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Luxury Photography",
    description:
      "Timeless wedding portraits captured with elegance and emotion.",
  },
  {
    icon: Video,
    title: "Cinematic Films",
    description:
      "Beautiful wedding films crafted like a romantic movie.",
  },
  {
    icon: Heart,
    title: "Emotion-Driven Storytelling",
    description:
      "Every smile, tear, and magical moment preserved forever.",
  },
  {
    icon: Award,
    title: "Award-Winning Team",
    description:
      "Trusted by hundreds of happy couples across India.",
  },
];

const highlights = [
  "50+ Weddings Captured",
  "2+ Years of Experience",
  "4K Cinematic Wedding Films",
  "Drone Coverage Available",
  "Same Day Reels",
  "100% Client Satisfaction",
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-28 text-white"
    >
      {/* Background Effects */}
      <div className="absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-20 h-[500px] w-[500px] rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.08),transparent_40%)]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-24 lg:grid-cols-2">
          {/* Left Image Section */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative pb-28 lg:pb-10"
          >
            {/* Decorative Glow */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-amber-400/20 via-transparent to-yellow-400/20 blur-xl" />

            {/* Main Image Container */}
            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/50 backdrop-blur-xl">
              {/* Image Wrapper */}
              <div className="relative overflow-hidden rounded-[2rem]">
                <Image
                  src="https://res.cloudinary.com/dojs87lwo/image/upload/v1779309169/pexels-stories_by-_sodhi-499459916-16067898_zrommm.jpg"
                  alt="The Royal Pixel Wedding Photography"
                  width={700}
                  height={850}
                  className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Quote Box */}
                <div className="absolute bottom-4 left-4 right-4 z-10 rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="mb-2 flex items-center gap-2">
                    <Quote className="h-4 w-4 text-amber-300" />
                    <span className="text-sm font-medium text-amber-300">
                      Our Promise
                    </span>
                  </div>

                  <p className="text-sm leading-6 text-gray-200 sm:text-base">
                    Every frame tells a story filled with love,
                    emotion, and timeless memories.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Experience Card */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-2
                top-6
                z-20
                rounded-2xl
                border
                border-white/10
                bg-white/10
                px-4
                py-3
                backdrop-blur-2xl
                shadow-xl

                sm:left-4
                sm:top-8
                sm:px-5
                sm:py-4

                lg:-left-8
                lg:top-10
              "
            >
              <p className="text-xl font-bold text-amber-300 sm:text-2xl">
                2+
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-300 sm:text-xs">
                Years Experience
              </p>
            </motion.div>

            {/* Floating Stats Card - Overlap Fully Fixed */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -bottom-4
                right-4
                z-30
                rounded-3xl
                border
                border-white/10
                bg-black/60
                p-5
                backdrop-blur-2xl
                shadow-2xl
                shadow-black/50

                sm:-bottom-6
                sm:right-6
                sm:p-6

                lg:-bottom-10
                lg:-right-10
              "
            >
              <div className="mb-2 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-300 text-amber-300"
                  />
                ))}
              </div>

              <p className="text-3xl font-bold text-amber-300 sm:text-4xl">
                50+
              </p>

              <p className="text-xs text-gray-300 sm:text-sm">
                Weddings Captured
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content Section */}
          <motion.div
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {/* Badge */}
            <motion.div
              custom={0.3}
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 backdrop-blur-xl"
            >
              <Sparkles className="h-4 w-4 text-amber-300" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
                About The Royal Pixel
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              custom={0.4}
              variants={fadeUp}
              className="mb-6 text-4xl font-bold leading-tight md:text-6xl"
            >
              Turning Precious Moments Into
              <span className="block bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
                Timeless Memories
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              custom={0.5}
              variants={fadeUp}
              className="mb-6 text-lg leading-8 text-gray-300"
            >
              The Royal Pixel is a premium wedding photography and
              cinematography studio dedicated to capturing the beauty,
              emotions, and unforgettable moments of your wedding day.
            </motion.p>

            <motion.p
              custom={0.6}
              variants={fadeUp}
              className="mb-10 text-lg leading-8 text-gray-300"
            >
              We transform your love story into elegant photographs
              and cinematic films that you and your family will
              cherish forever.
            </motion.p>

            {/* Highlights */}
            <motion.div
              custom={0.7}
              variants={fadeUp}
              className="mb-12 grid gap-4 sm:grid-cols-2"
            >
              {highlights.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-amber-300 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Feature Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    custom={0.8 + index * 0.1}
                    variants={fadeUp}
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                    }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-2xl transition-all duration-500 hover:border-amber-400/30 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-amber-500/10"
                  >
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                    <div className="relative z-10">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 text-amber-300 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3 className="mb-2 font-semibold text-white">
                        {feature.title}
                      </h3>

                      <p className="text-sm leading-6 text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}