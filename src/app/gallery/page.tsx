"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Play,
  X,
  Sparkles,
  Camera,
  Film,
  Grid3X3,
} from "lucide-react";

type Category =
  | "All"
  | "Weddings"
  | "Pre-Wedding"
  | "Portraits"
  | "Videos";

type GalleryItem = {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
};

const galleryItems: GalleryItem[] = [
  // Weddings
  {
    id: 1,
    title: "Royal Wedding Ceremony",
    category: "Weddings",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779309383/amish-thakkar-BEdxXAiRfRM-unsplash_dkuodh.jpg",
  },
  {
    id: 2,
    title: "Wedding",
    category: "Weddings",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779311064/pexels-jonathanborba-19841040_ianvg9.jpg",
  },
  {
    id: 3,
    title: "Wedding",
    category: "Weddings",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779311773/cscs_qw7ygz.jpg",
  },
  {
    id: 4,
    title: "Bride Entry",
    category: "Weddings",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779313840/pexels-next-frame-company-701639171-18428774_detiyo.jpg",
  },
  {
    id: 5,
    title: "Bride Entry",
    category: "Weddings",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779313838/pexels-khaas-photographer-3700378-24334712_swlcwe.jpg",
  },
  {
    id: 6,
    title: "Varmala Ceremony",
    category: "Weddings",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779312302/pexels-vatsalmandavia-16151770_me5d43.jpg",
  },
  {
    id: 7,
    title: "Varmala Ceremony",
    category: "Weddings",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779313214/pexels-darkmodecinema-30394999_oxohne.jpg",
  },
  {
    id: 8,
    title: "Saat Phere",
    category: "Weddings",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779313837/pexels-fliqaindia-32325264_s8ggbv.jpg",
  },
  {
    id: 9,
    title: "Saat Phere",
    category: "Weddings",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779313836/pexels-fotographiya-wedding-photography-823737813-30184675_dmqrtd.jpg",
  },
  {
    id: 34,
    title: "Saat Phere",
    category: "Weddings",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779312159/alok-verma-80l2FftMuBI-unsplash_eved3v.jpg",
  },
  {
    id: 10,
    title: "Wedding Celebration",
    category: "Weddings",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779313835/pexels-photography-maghradze-ph-1659410-29237413_oxlk24.jpg",
  },
  {
    id: 11,
    title: "Wedding Celebration",
    category: "Weddings",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779311064/pexels-anish-bindoriya-1957073-28074925_eumoor.jpg",
  },
  {
    id: 12,
    title: "Wedding Celebration",
    category: "Weddings",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779312302/pexels-shubham-kumar-360410229-16037494_g65foy.jpg",
  },
  {
    id: 13,
    title: "Bride",
    category: "Weddings",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779313836/pexels-khaas-photographer-3700378-31832874_dv77s9.jpg",
  },
  {
    id: 14,
    title: "Bride",
    category: "Weddings",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779312159/amish-thakkar-lAY2TAhN06k-unsplash_ri9mfj.jpg",
  },
  {
    id: 15,
    title: "Bride",
    category: "Weddings",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779310562/pexels-framesbygaurav-36102587_dtyzoo.jpg",
  },
  {
    id: 16,
    title: "Bride Entry",
    category: "Weddings",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779313835/pexels-rohit-piple-3291022-34479850_bu0lok.jpg",
  },

  // Pre-Wedding
  {
    id: 17,
    title: "Cinematic Couple Portrait",
    category: "Pre-Wedding",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779311426/pexels-mateo-bastidas-218645935-11889780_cdx6d0.jpg",
  },
  {
    id: 18,
    title: "Cinematic Couple Portrait",
    category: "Pre-Wedding",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779314752/pexels-sahil-sonawane-87922-15228120_owebbr.jpg",
  },
  {
    id: 19,
    title: "Romantic Walk",
    category: "Pre-Wedding",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779314927/pexels-bonaventure-fernandez-744363-27946351_grbpcr.jpg",
  },
  {
    id: 20,
    title: "Romantic Walk",
    category: "Pre-Wedding",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779315539/pexels-camera-treasure-928922-17704229_lpthb3.jpg",
  },
  {
    id: 21,
    title: "Sunset Love Story",
    category: "Pre-Wedding",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779315024/pexels-asadphoto-1024996_kggyah.jpg",
  },
  {
    id: 22,
    title: "Dreamy Couple Shot",
    category: "Pre-Wedding",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779315223/pexels-avneet-kaur-669191817-20092007_tzc8dp.jpg",
  },
  {
    id: 23,
    title: "Dreamy Couple Shot",
    category: "Pre-Wedding",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779314752/pexels-mayur-dagdi-2149652364-30871487_lr1l58.jpg",
  },
  {
    id: 24,
    title: "Romantic Highlights",
    category: "Pre-Wedding",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779315222/pexels-sampark-films-samparkfilms-com-1300296201-32149822_rmfc20.jpg",
  },
  {
    id: 25,
    title: "Romantic Highlights",
    category: "Pre-Wedding",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779315424/pexels-theshortguyfilms-29187302_ga1sx9.jpg",
  },

  // // Portraits
  {
    id: 26,
    title: "Luxury Bridal Portrait",
    category: "Portraits",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779315892/pexels-andrea-prochilo-3062027-34203250_wstv5u.jpg",
  },
  {
    id: 27,
    title: "Luxury Bridal Portrait",
    category: "Portraits",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779315890/pexels-melinee-336304747-14666125_dr463h.jpg",
  },
  {
    id: 28,
    title: "Traditional Ceremony",
    category: "Portraits",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779315889/pexels-fliqaindia-30184770_bxe0l2.jpg",
  },
  {
    id: 29,
    title: "Traditional Ceremony",
    category: "Portraits",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779315890/pexels-aksh-shaurya-36099307-12200996_sy0kih.jpg",
  },
  {
    id: 30,
    title: "Elegant Bride",
    category: "Portraits",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779316163/pexels-gursher-gill-63702010-13661732_oqwrd3.jpg",
  },
  {
    id: 31,
    title: "Classic Couple Portrait",
    category: "Portraits",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779316176/pexels-deepak-sharma-503041381-36249010_a4lhjs.jpg",
  },
  {
    id: 32,
    title: "Classic Couple Portrait",
    category: "Portraits",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779316173/pexels-ids-fotowale-1416063-17000482_yqxo64.jpg",
  },
  {
    id: 33,
    title: "Classic Couple Portrait",
    category: "Portraits",
    type: "image",
    src: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779309615/jonathan-borba-aC5_EFhq7Fs-unsplash_eoahos.jpg",
  },

  // Videos
  // {
  //   id: 16,
  //   title: "Wedding Teaser Film",
  //   category: "Videos",
  //   type: "video",
  //   src: "YOUR_VIDEO_1",
  //   thumbnail: "YOUR_VIDEO_THUMBNAIL_1",
  // },
  // {
  //   id: 17,
  //   title: "Pre-Wedding Film",
  //   category: "Videos",
  //   type: "video",
  //   src: "YOUR_VIDEO_2",
  //   thumbnail: "YOUR_VIDEO_THUMBNAIL_2",
  // },
  {
    id: 35,
    title: "Bride Entry Film",
    category: "Videos",
    type: "video",
    src: "https://res.cloudinary.com/dojs87lwo/video/upload/v1779040840/vidssave.com_Kiara_Sidharth___Ranjha___The_Wedding_Filmer_1440p_uaghvw.mp4",
    thumbnail: "https://res.cloudinary.com/dojs87lwo/image/upload/v1779313838/pexels-khaas-photographer-3700378-24334712_swlcwe.jpg",
  },
  // {
  //   id: 19,
  //   title: "Couple Story Film",
  //   category: "Videos",
  //   type: "video",
  //   src: "YOUR_VIDEO_4",
  //   thumbnail: "YOUR_VIDEO_THUMBNAIL_4",
  // },
  // {
  //   id: 20,
  //   title: "Reception Highlights",
  //   category: "Videos",
  //   type: "video",
  //   src: "YOUR_VIDEO_5",
  //   thumbnail: "YOUR_VIDEO_THUMBNAIL_5",
  // },
];

const categories: Category[] = [
  "All",
  "Weddings",
  "Pre-Wedding",
  "Portraits",
  "Videos",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const selectedItem =
    selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % filteredItems.length);
  };

  const showPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      (selectedIndex - 1 + filteredItems.length) % filteredItems.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, filteredItems.length]);

  useEffect(() => {
    const preventContextMenu = (e: MouseEvent) => e.preventDefault();
    const preventDrag = (e: DragEvent) => e.preventDefault();

    document.addEventListener("contextmenu", preventContextMenu);
    document.addEventListener("dragstart", preventDrag);

    return () => {
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("dragstart", preventDrag);
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white select-none">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[600px] w-[600px] rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[600px] w-[600px] rounded-full bg-orange-500/5 blur-3xl" />
      </div>

      <section className="relative px-6 pb-12 pt-24 md:pt-32">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-5 py-2.5 backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
              The Royal Collection
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-5xl font-bold leading-tight md:text-7xl"
          >
            Timeless Wedding
            <span className="block bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
              Memories & Films
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-lg leading-8 text-gray-300"
          >
            Explore our premium collection of wedding photography,
            cinematic films, portraits, and unforgettable moments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex justify-center"
          >
            <Link
              href="/"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-gray-300 backdrop-blur-xl transition-all duration-700 hover:-translate-y-1 hover:border-amber-400/40 hover:text-amber-300 hover:shadow-[0_15px_40px_rgba(251,191,36,0.18)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              <ArrowLeft className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="relative z-10">Back to Home</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-10">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3">
          {categories.map((category, index) => {
            const isActive = activeCategory === category;

            return (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedIndex(null);
                }}
                className="group relative"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterGlow"
                    className="absolute -inset-1 rounded-full bg-amber-400/30 blur-xl"
                  />
                )}

                <div
                  className={`relative overflow-hidden rounded-full border px-4 py-2.5 backdrop-blur-xl transition-all duration-500 ${
                    isActive
                      ? "border-amber-400/50 bg-gradient-to-r from-amber-300 to-yellow-400 text-black shadow-[0_10px_30px_rgba(251,191,36,0.35)]"
                      : "border-white/10 bg-white/5 text-gray-300 hover:border-amber-400/30 hover:text-amber-300"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {category === "All" && (
                      <Grid3X3 className="h-3.5 w-3.5" />
                    )}
                    {category === "Videos" && (
                      <Film className="h-3.5 w-3.5" />
                    )}
                    {category !== "All" && category !== "Videos" && (
                      <Camera className="h-3.5 w-3.5" />
                    )}
                    <span className="text-[11px] font-semibold uppercase tracking-[0.28em]">
                      {category}
                    </span>
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* Pinterest Style Gallery */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl columns-1 gap-8 sm:columns-2 xl:columns-3">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              onClick={() => openLightbox(index)}
              className="group relative mb-8 break-inside-avoid cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-[#050505] p-2 shadow-[0_10px_40px_rgba(0,0,0,0.45)] transition-all duration-700 hover:-translate-y-2 hover:border-amber-400/30 hover:shadow-[0_25px_80px_rgba(251,191,36,0.18)]"
            >
              <div className="absolute -inset-[2px] rounded-[2rem] bg-gradient-to-br from-amber-400/0 via-amber-400/20 to-yellow-300/10 opacity-0 blur-2xl transition-all duration-700 group-hover:opacity-100" />

              <div className="relative overflow-hidden rounded-[1.7rem] bg-black">
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={1200}
                    height={1800}
                    draggable={false}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="h-auto w-full object-contain transition-transform duration-1000 group-hover:scale-105"
                  />
                ) : (
                  <div className="relative">
                    <Image
                      src={item.thumbnail || item.src}
                      alt={item.title}
                      width={1200}
                      height={1800}
                      draggable={false}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="h-auto w-full object-contain transition-transform duration-1000 group-hover:scale-105"
                    />

                    <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/15 backdrop-blur-xl">
                      <Play
                        className="ml-1 h-6 w-6 text-white"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 pb-12">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
                    {item.category}
                  </p>

                  <h3 className="text-2xl font-bold leading-tight text-white">
                    {item.title}
                  </h3>
                </div>

                <div className="absolute bottom-4 right-4 rounded-full bg-black/65 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
                  The Royal Pixel Studio
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 p-4 backdrop-blur-2xl"
            onClick={closeLightbox}
          >
            <PremiumIconButton
              className="right-6 top-6"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              icon={<X className="h-5 w-5" />}
            />

            <PremiumIconButton
              className="left-6 top-1/2 -translate-y-1/2"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              icon={<ArrowLeft className="h-5 w-5" />}
            />

            <PremiumIconButton
              className="right-6 top-1/2 -translate-y-1/2"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              icon={<ArrowRight className="h-5 w-5" />}
            />

            <div
              className="mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center px-4"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === "image" ? (
                <div className="relative flex max-h-[82vh] w-auto max-w-full items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-[0_25px_100px_rgba(0,0,0,0.65)]">
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    width={2000}
                    height={2000}
                    priority
                    draggable={false}
                    className="h-auto max-h-[82vh] w-auto max-w-full object-contain"
                  />
                </div>
              ) : (
                <div className="relative inline-block max-w-full">
                  <video
                    src={selectedItem.src}
                    controls
                    autoPlay
                    playsInline
                    preload="auto"
                    controlsList="nodownload noplaybackrate"
                    disablePictureInPicture
                    className="block max-h-[82vh] max-w-full rounded-[2rem] border border-white/10 bg-black shadow-[0_25px_100px_rgba(0,0,0,0.65)]"
                    style={{
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                      verticalAlign: "middle",
                    }}
                  />
                </div>
              )}

              <div className="mt-6 pb-8 text-center">
                <p className="mb-2 text-sm uppercase tracking-[0.3em] text-amber-300">
                  {selectedItem.category}
                </p>

                <h3 className="text-3xl font-bold text-white md:text-4xl">
                  {selectedItem.title}
                </h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

type PremiumIconButtonProps = {
  className: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon: React.ReactNode;
};

function PremiumIconButton({
  className,
  onClick,
  icon,
}: PremiumIconButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.12, rotate: 2 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      onClick={onClick}
      className={`group absolute z-50 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.45)] transition-all duration-700 hover:border-amber-400/50 hover:text-amber-300 hover:shadow-[0_0_40px_rgba(251,191,36,0.35)] ${className}`}
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300/20 to-yellow-400/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
      <span className="relative z-10">{icon}</span>
    </motion.button>
  );
}

