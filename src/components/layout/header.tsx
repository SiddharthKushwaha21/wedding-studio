"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Menu,
  Phone,
  Sparkles,
  X,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const rafRef = useRef<number | null>(null);

  const { scrollYProgress } = useScroll();

  const progressScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  useEffect(() => {
    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = siteConfig.navLinks.map((link) => ({
        name: link.name,
        id:
          link.href === "/"
            ? "home"
            : link.href.replace("/#", "").replace("/", ""),
      }));

      if (window.scrollY < 200) {
        setActiveSection("Home");
        return;
      }

      for (const section of sections) {
        if (section.id === "home") continue;

        const element = document.getElementById(section.id);

        if (!element) continue;

        const rect = element.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section.name);
          return;
        }
      }
    };

    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateHeaderState);
    };

    updateHeaderState();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : originalOverflow;

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: progressScale }}
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500"
      />

      {/* Header */}
      <motion.header
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="mx-auto max-w-[1600px] px-4 pt-4 sm:px-6 lg:px-8">
          <motion.div
            animate={{
              scale: isScrolled ? 0.985 : 1,
              y: isScrolled ? -2 : 0,
            }}
            transition={{ duration: 0.4 }}
            className={`group relative overflow-hidden rounded-[30px] border transition-all duration-700 ${
              isScrolled
                ? "border-white/10 bg-black/75 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur-3xl"
                : "border-amber-400/15 bg-black/40 shadow-[0_15px_60px_rgba(251,191,36,0.08)] backdrop-blur-2xl"
            }`}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 via-transparent to-yellow-500/5" />

            {/* Premium Shine */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]"
            />

            {/* Top Border Light */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />

            {/* Ambient Glow */}
            <div className="absolute -left-16 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-amber-400/10 blur-3xl" />
            <div className="absolute -right-16 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

            {/* Navbar */}
            <div className="relative flex h-20 items-center justify-between px-6 lg:px-8">
              {/* Logo */}
              <Link
                href="/"
                className="group/logo flex items-center gap-4 focus-visible:outline-none"
              >
                <motion.div
                  whileHover={{
                    rotate: 6,
                    scale: 1.08,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-400/20 to-yellow-500/10 shadow-xl shadow-amber-500/10"
                >
                  <Camera className="h-5 w-5 text-amber-300" />
                  <div className="absolute inset-0 rounded-2xl bg-amber-400/20 blur-xl opacity-0 transition-opacity duration-500 group-hover/logo:opacity-100" />
                </motion.div>

                <div className="leading-none">
                  <h1 className="bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-xl font-bold tracking-tight text-transparent sm:text-2xl lg:text-3xl">
                    The Royal Pixel
                  </h1>

                  <p className="mt-1 hidden text-[10px] uppercase tracking-[0.35em] text-amber-300/90 sm:block">
                    Wedding Films Studio
                  </p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav
                aria-label="Main Navigation"
                className="hidden items-center gap-1 lg:flex"
              >
                {siteConfig.navLinks.map((link) => {
                  const isActive = activeSection === link.name;

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className="group relative rounded-full px-5 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      {isActive && (
                        <motion.span
                          layoutId="active-nav"
                          className="absolute inset-0 rounded-full border border-white/10 bg-white/10 shadow-lg shadow-white/5 backdrop-blur-xl"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}

                      <span
                        className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-white/75 group-hover:text-white"
                        }`}
                      >
                        {link.name}
                      </span>

                      <span className="absolute bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-400 to-transparent transition-all duration-300 group-hover:w-3/4" />
                    </Link>
                  );
                })}
              </nav>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <Button
                  asChild
                  className="group hidden h-12 rounded-full border border-amber-300/20 bg-gradient-to-r from-amber-400 to-yellow-500 px-6 text-black shadow-xl shadow-amber-500/20 transition-all duration-500 hover:scale-105 hover:shadow-amber-400/40 md:flex"
                >
                  <Link href="/#contact">
                    <Phone className="mr-2 h-4 w-4" />
                    Book Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>

                {/* Mobile Menu Button */}
                <button
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isOpen}
                  aria-controls="mobile-menu"
                  onClick={() => setIsOpen(true)}
                  className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black lg:hidden"
                >
                  <Menu className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 28,
                stiffness: 220,
              }}
              className="fixed right-0 top-0 z-50 h-full w-full max-w-sm border-l border-white/10 bg-black/95 backdrop-blur-3xl lg:hidden"
            >
              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />

              {/* Header */}
              <div className="relative flex h-20 items-center justify-between border-b border-white/10 px-6">
                <div>
                  <h2 className="bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-2xl font-bold text-transparent">
                    The Royal Pixel
                  </h2>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-amber-300">
                    Wedding Films Studio
                  </p>
                </div>

                <button
                  aria-label="Close menu"
                  onClick={() => setIsOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="relative p-6">
                {siteConfig.navLinks.map((link, index) => {
                  const isActive = activeSection === link.name;

                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.05,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className={`mb-2 flex items-center justify-between rounded-2xl px-4 py-4 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                          isActive
                            ? "border border-amber-400/20 bg-amber-400/10 text-white"
                            : "border border-transparent text-white/90 hover:border-white/10 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronRight className="h-4 w-4 text-amber-300" />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* CTA Card */}
              <div className="relative p-6 pt-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <div className="mb-3 flex items-center gap-2 text-amber-300">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-sm font-semibold">
                      Limited Dates Available
                    </span>
                  </div>

                  <p className="mb-5 text-sm leading-6 text-white/70">
                    Secure your wedding date and let us capture your love story
                    with cinematic elegance and timeless memories.
                  </p>

                  <Button
                    asChild
                    className="w-full rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black shadow-lg shadow-amber-500/20"
                  >
                    <Link
                      href="/#contact"
                      onClick={() => setIsOpen(false)}
                    >
                      Book Consultation
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}