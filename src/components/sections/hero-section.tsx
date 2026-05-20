"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  Camera,
  Award,
  Heart,
  Star,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const stats = [
  { value: 50, suffix: "+", label: "Weddings Captured" },
  { value: 45, suffix: "+", label: "Happy Couples" },
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 8, suffix: "+", label: "Awards Won" },
];

const features = [
  "Drone Coverage",
  "4K Cinematic Films",
  "Same Day Reels",
];

const trustPoints = [
  {
    icon: Camera,
    text: "Cinematic Coverage",
  },
  {
    icon: Award,
    text: "Award-Winning Team",
  },
  {
    icon: Heart,
    text: "Emotion-Driven Storytelling",
  },
  {
    icon: Star,
    text: "5-Star Client Reviews",
  },
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function Counter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 40,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 40,
    damping: 20,
  });

  const bgX = useTransform(smoothX, [-0.5, 0.5], ["-3%", "3%"]);
  const bgY = useTransform(smoothY, [-0.5, 0.5], ["-3%", "3%"]);

  const contentX = useTransform(smoothX, [-0.5, 0.5], ["-1%", "1%"]);
  const contentY = useTransform(smoothY, [-0.5, 0.5], ["-1%", "1%"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLElement>
  ) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } =
      currentTarget.getBoundingClientRect();

    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{
          x: bgX,
          y: bgY,
          scale: 1.08,
        }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero/hero-1.jpg"
          alt="Luxury Wedding Photography"
          fill
          priority
          quality={100}
          className="object-cover"
        />
      </motion.div>

      {/* Dark Overlays */}
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30" />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
        }}
      />

      {/* Ambient Glows */}
      <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="absolute left-1/3 top-1/3 h-80 w-80 rounded-full bg-rose-400/5 blur-3xl" />

      {/* Floating Particles */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-20 top-40 hidden h-3 w-3 rounded-full bg-amber-300 shadow-lg shadow-amber-300/50 lg:block"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-24 top-52 hidden h-2 w-2 rounded-full bg-white/80 lg:block"
      />

      {/* Main Content */}
      <motion.div
        style={{
          x: contentX,
          y: contentY,
        }}
        className="relative z-10 flex min-h-screen items-center pb-12 pt-36"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl">
            {/* Premium Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="relative mb-8 inline-flex overflow-hidden rounded-full p-[1px]"
            >
              <div className="absolute inset-0 animate-[spin_8s_linear_infinite] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
              <div className="relative flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-5 py-2.5 backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-amber-300" />
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
                  Luxury Wedding Photography & Films
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              custom={0.15}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-8 text-5xl font-bold leading-[0.92] tracking-tight sm:text-6xl lg:text-8xl xl:text-9xl"
            >
              Capturing
              <span className="block bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
                Love Stories
              </span>
              <span className="block">That Last Forever</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              custom={0.3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-10 max-w-3xl text-lg leading-9 text-gray-200 md:text-2xl"
            >
              Premium wedding photography and cinematic videography
              crafted to preserve every emotion, detail, and magical
              moment of your most cherished day.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-10 flex flex-wrap gap-4"
            >
              {features.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4 + index * 0.1,
                    duration: 0.6,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                  }}
                  className="group relative overflow-hidden rounded-full p-[1px]"
                >
                  <div className="absolute inset-0 animate-[spin_10s_linear_infinite] bg-gradient-to-r from-amber-400/0 via-amber-400 to-yellow-500/0" />

                  <div className="relative flex items-center gap-3 rounded-full bg-black/70 px-5 py-3 backdrop-blur-xl">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-400/10">
                      <CheckCircle2 className="h-4 w-4 text-amber-300" />
                    </div>

                    <span className="text-sm font-medium text-white/85">
                      {item}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              custom={0.5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-14 flex flex-wrap gap-5"
            >
              <Button
                size="lg"
                asChild
                className="group h-16 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-10 text-base font-semibold text-black shadow-2xl shadow-amber-500/30 transition-all duration-500 hover:scale-105 hover:shadow-amber-400/40"
              >
                <Link href="/#contact">
                  Book Your Date
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="group h-16 rounded-full border border-white/20 bg-white/10 px-10 text-base font-semibold text-white backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:bg-white/20"
              >
                <Link href="/#portfolio">
                  <Play className="mr-3 h-5 w-5 fill-current" />
                  View Portfolio
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={0.65}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <h3 className="text-4xl font-bold text-amber-400">
                    <Counter
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                  </h3>
                  <p className="mt-2 text-sm text-gray-300">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Pills */}
            <motion.div
              custom={0.8}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              {trustPoints.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.8 + index * 0.08,
                      duration: 0.6,
                    }}
                    whileHover={{
                      y: -6,
                      scale: 1.03,
                    }}
                    className="group relative overflow-hidden rounded-full p-[1px]"
                  >
                    <div className="absolute inset-0 animate-[spin_12s_linear_infinite] bg-gradient-to-r from-amber-400/0 via-amber-400 to-yellow-500/0" />

                    <div className="relative flex items-center gap-3 rounded-full bg-black/70 px-5 py-3 backdrop-blur-xl">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400/10">
                        <Icon className="h-4 w-4 text-amber-300" />
                      </div>

                      <span className="text-sm font-medium text-white/85">
                        {item.text}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}