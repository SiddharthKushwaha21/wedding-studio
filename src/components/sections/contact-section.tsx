"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  ArrowUpRight,
  Clock,
  Loader2,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

const WHATSAPP_URL = "https://wa.me/918318075481";
const INSTAGRAM_URL = "https://instagram.com";
const EMAIL_URL = "mailto:sid.kushwaha04@gmail.com?subject=Wedding%20Inquiry";
const MAPS_URL = "https://maps.app.goo.gl/Yqi5aukMHqaT3K189";

const RESPONSE_TIME_TEXT = "We usually respond within 3–4 hours.";
const MAX_MESSAGE_LENGTH = 1000;

type ContactInfoItem = {
  icon: LucideIcon;
  title: string;
  value: string;
  href: string;
};

const contactInfo: ContactInfoItem[] = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 83180 75481",
    href: "tel:+918318075481",
  },
  {
    icon: Mail,
    title: "Gmail Us",
    value: "sid.kushwaha04@gmail.com",
    href: EMAIL_URL,
  },
  {
    icon: MapPin,
    title: "The Royal Pixel Studio Address",
    value: "Kanpur Nagar, Uttar Pradesh, India",
    href: MAPS_URL,
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "10:00 AM - 8:00 PM",
    href: "",
  },
];

const inputClasses =
  "w-full min-w-0 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-gray-500 transition-all duration-300 focus:border-amber-400/60 focus:bg-white/[0.07] focus:shadow-[0_0_25px_rgba(251,191,36,0.12)]";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const minimumWeddingDate = useMemo(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  }, []);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!WEB3FORMS_ACCESS_KEY) {
      toast.error(
        "Form configuration error. Please contact us directly via WhatsApp."
      );
      return;
    }

    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector(
        ":invalid"
      ) as HTMLElement | null;

      if (firstInvalid) {
        firstInvalid.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        firstInvalid.focus();
      }

      form.reportValidity();
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(form);

    const customerName = String(
      formData.get("name") || "Customer"
    );

    const customerEmail = String(
      formData.get("email") || ""
    );

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append(
      "subject",
      `New Wedding Inquiry from ${customerName}`
    );
    formData.append(
      "from_name",
      "The Royal Pixel Website"
    );
    formData.append("replyto", customerEmail);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        toast.success(
          "Thank you! Your inquiry has been sent successfully."
        );
        form.reset();
      } else {
        toast.error(
          data.message ||
            "Something went wrong. Please try again."
        );
      }
    } catch {
      toast.error(
        "Network error. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-black py-20 text-white md:py-32"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[140px] md:h-[700px] md:w-[700px] md:blur-[180px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-yellow-400/10 blur-[140px] md:h-[700px] md:w-[700px] md:blur-[180px]" />

      {/* Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-14 max-w-5xl text-center md:mb-20"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-5 py-3 backdrop-blur-none md:px-6">
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-amber-300 sm:text-xs">
              Contact Us
            </span>
          </div>

          <h2 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-7xl lg:text-8xl">
            Let&apos;s Create Your
            <span className="block bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
              Dream Wedding Story
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-8 text-gray-300 sm:text-lg md:text-xl">
            Get in touch with us to discuss your wedding photography and
            cinematography requirements.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-20 isolate flex h-full flex-col"
          >
            {/* Contact Cards */}
            {/* <div className="grid flex-1 gap-5">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    target={item.href !== "#" ? "_blank" : undefined}
                    rel={
                      item.href !== "#"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    whileHover={{ y: -8 }}
                    className="group relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-none transition-all duration-500 hover:border-amber-400/40 hover:shadow-[0_0_60px_rgba(251,191,36,0.12)]"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-400/0 via-amber-400/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="pointer-events-none absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-amber-400/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-10">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-300 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.35)]">
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3 className="mb-2 text-lg font-bold text-white sm:text-xl">
                        {item.title}
                      </h3>

                      <p className="text-sm leading-7 text-gray-300">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div> */}
            {/* Contact Cards */}
            <div className="grid flex-1 gap-5">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const isClickable = item.href && item.href !== "#";

                const cardContent = (
                  <>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-400/0 via-amber-400/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="pointer-events-none absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-amber-400/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-10">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-300 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.35)]">
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3 className="mb-2 text-lg font-bold text-white sm:text-xl">
                        {item.title}
                      </h3>

                      <p className="text-sm leading-7 text-gray-300">
                        {item.value}
                      </p>
                    </div>
                  </>
                );

                const cardClass = "group relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-none transition-all duration-500 hover:border-amber-400/40 hover:shadow-[0_0_60px_rgba(251,191,36,0.12)] active:scale-[0.98]";

                if (isClickable) {
                  return (
                    <motion.a
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                          duration: 0.6,
                          delay: index * 0.1,
                      }}
                      whileHover={{ y: -8 }}
                      className={cardClass}
                    >
                      {cardContent}
                    </motion.a>
                  );
                }

                return (
                  <motion.div
                     key={item.title}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{
                       duration: 0.6,
                       delay: index * 0.1,
                     }}
                     whileHover={{ y: -8 }}
                     className={cardClass}
                  >
                     {cardContent}
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Action Buttons */}
            <div className="relative z-30 isolate mt-8 flex flex-col gap-4 sm:flex-row">
              {/* WhatsApp Button */}
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative isolate inline-flex w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition-all duration-500 hover:scale-[1.03] hover:bg-green-500 hover:shadow-[0_0_45px_rgba(34,197,94,0.45)]"
              >
                <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-green-400/0 via-white/10 to-green-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="pointer-events-none absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 group-hover:left-full" />

                <FaWhatsapp className="relative z-10 h-5 w-5 shrink-0 text-white" />
                <span className="relative z-10">WhatsApp Us</span>
                <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              {/* Instagram Button */}
              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative isolate inline-flex w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-none transition-all duration-500 hover:scale-[1.03] hover:border-pink-400/40 hover:bg-white/10 hover:shadow-[0_0_45px_rgba(236,72,153,0.25)]"
              >
                <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/0 via-pink-500/10 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="pointer-events-none absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 group-hover:left-full" />

                <FaInstagram className="relative z-10 h-5 w-5 shrink-0 text-white" />
                <span className="relative z-10">Instagram</span>
                <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 isolate overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-none sm:p-8 md:p-10"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-400/5 via-transparent to-transparent" />

            <div className="relative z-10">
              <h3 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
                Send Us a Message
              </h3>

              <p className="text-sm leading-7 text-gray-300 sm:text-base">
                Fill out the form and we&apos;ll get back to you shortly.
              </p>

              <div className="mb-8 mt-4 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-xs font-medium text-green-300">
                <Clock className="h-4 w-4" />
                {RESPONSE_TIME_TEXT}
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid gap-6 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    required
                    minLength={2}
                    maxLength={100}
                    autoComplete="name"
                    aria-label="Your Name"
                    placeholder="Your Name"
                    className={inputClasses}
                  />

                  <input
                    type="tel"
                    name="phone"
                    required
                    pattern="[6-9][0-9]{9}"
                    maxLength={10}
                    title="Please enter a valid 10-digit Indian mobile number."
                    autoComplete="tel"
                    inputMode="numeric"
                    aria-label="Phone Number"
                    placeholder="Phone Number"
                    className={inputClasses}
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  aria-label="Email Address"
                  placeholder="Email Address"
                  className={inputClasses}
                />

                <div className="relative">
                  <Calendar className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-amber-300" />

                  <input
                    type="date"
                    name="wedding_date"
                    required
                    min={minimumWeddingDate}
                    aria-label="Wedding Date"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 text-white outline-none transition-all duration-300 focus:border-amber-400/60 focus:bg-white/[0.07] focus:shadow-[0_0_25px_rgba(251,191,36,0.12)]"
                  />
                </div>

                <input
                  type="text"
                  name="event_location"
                  required
                  maxLength={150}
                  autoComplete="address-level2"
                  aria-label="Event Location"
                  placeholder="Event Location (City / Venue)"
                  className={inputClasses}
                />

                <select
                  name="package"
                  required
                  defaultValue=""
                  aria-label="Choose Package"
                  className={`${inputClasses} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ffffff' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m6 9 6 6 6-6'/%3E%3C/svg%3E")] bg-[length:20px] bg-[right_1.25rem_center] bg-no-repeat pr-12 text-white`}
                >
                  <option
                    value=""
                    disabled
                    className="bg-[#0a0a0a] text-gray-300"
                  >
                    Choose Package
                  </option>
                  <option
                    value="Silver Package"
                    className="bg-[#0a0a0a] text-white"
                  >
                    Silver Package
                  </option>
                  <option
                    value="Gold Package"
                    className="bg-[#0a0a0a] text-white"
                  >
                    Gold Package
                  </option>
                  <option
                    value="Premium Package"
                    className="bg-[#0a0a0a] text-white"
                  >
                    Premium Package
                  </option>
                  <option
                    value="Custom Package"
                    className="bg-[#0a0a0a] text-white"
                  >
                    Custom Package
                  </option>
                </select>

                <div>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    minLength={20}
                    maxLength={MAX_MESSAGE_LENGTH}
                    aria-label="Message"
                    placeholder="Tell us about your wedding, venue, and special requirements..."
                    className={`${inputClasses} resize-none`}
                  />

                  <p className="mt-2 text-right text-xs text-gray-400">
                    Maximum {MAX_MESSAGE_LENGTH} characters
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  Your information is secure and protected.
                </div>

                <button
                  type="submit"
                  disabled={
                    isSubmitting || !WEB3FORMS_ACCESS_KEY
                  }
                  className="group relative isolate inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-8 py-4 font-semibold text-black shadow-[0_0_40px_rgba(251,191,36,0.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(251,191,36,0.35)] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span className="pointer-events-none absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending Your Inquiry...
                      </>
                    ) : !WEB3FORMS_ACCESS_KEY ? (
                      <>Form Unavailable</>
                    ) : (
                      <>
                        Send Inquiry
                        <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-20 isolate mt-16 flex justify-center md:mt-20"
        >
          <div className="group relative isolate inline-flex items-center gap-3 overflow-hidden rounded-full border border-amber-400/20 bg-amber-400/10 px-6 py-4 backdrop-blur-none transition-all duration-500 hover:scale-[1.03] hover:border-amber-300/40 hover:shadow-[0_0_60px_rgba(251,191,36,0.25)] md:px-8">
            <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/0 via-amber-400/15 to-amber-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <span className="pointer-events-none absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 group-hover:left-full" />

            <Sparkles className="relative z-10 h-5 w-5 text-amber-300 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />

            <span className="relative z-10 text-center text-xs font-medium text-white sm:text-sm">
              Trusted by 50+ happy couples across India
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
