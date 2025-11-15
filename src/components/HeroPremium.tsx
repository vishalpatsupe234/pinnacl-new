"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HeroPremium({
  title = "Where Every Home Reflects You",
  subtitle = "Exquisite residences â€” designed for elegance, comfort & prestige.",
  poster = "/hero/hero-1.jpg",
  videoMp4 = "/brand/hero-video.mp4",
  whatsappNumber = "919146238303",
}: {
  title?: string;
  subtitle?: string;
  poster?: string;
  videoMp4?: string;
  whatsappNumber?: string;
}) {
  const waHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello, I'm interested in your properties. Please assist."
  )}`;

  return (
    <header className="relative w-full overflow-hidden">
      <div className="relative w-full h-[72vh] md:h-[80vh] lg:h-[88vh]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          style={{
            filter: "brightness(1.1) contrast(1.03) saturate(0.98)",
            transform: "scale(1.02)",
          }}
        >
          <source src={videoMp4} type="video/mp4" />
        </video>

        <div className="absolute inset-0 -z-10">
          <Image src={poster} alt={title} fill className="object-cover" priority />
        </div>

        <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(6,6,8,0.36) 0%, rgba(6,6,8,0.15) 40%, rgba(6,6,8,0.06) 100%)" }} />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-4xl px-6 text-center">
            <div className="inline-block bg-black/30 rounded-3xl px-8 py-4 mx-auto border border-white/8">
              <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl leading-tight" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, textShadow: "0 8px 22px rgba(0,0,0,0.55)" }}>
                {title}
              </h1>
            </div>

            <p className="mt-4 text-white/90 max-w-2xl mx-auto text-sm md:text-lg" style={{ lineHeight: 1.55 }}>
              {subtitle}
            </p>

            <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
              <a href={waHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F7DE9E] to-[#D4AF37] text-[#081226] px-6 py-3 font-semibold shadow-lg hover:scale-[1.02] transition">
                ðŸ’¬ Contact on WhatsApp
              </a>

              <a href="#featured-properties" className="inline-flex items-center gap-2 rounded-3xl bg-black/30 border border-white/8 px-6 py-3 text-white font-medium shadow-lg hover:scale-[1.02] transition" style={{ textShadow: "0 4px 12px rgba(0,0,0,0.35)", fontFamily: "Inter, sans-serif" }}>
                View Featured Properties
              </a>
            </div>

            <div className="mt-5 flex items-center justify-center gap-4 text-sm text-white/80">
              <span className="rounded px-2 py-0.5 text-xs bg-white/10">âœ… RERA Verified</span>
              <span>Trusted by 500+ families</span>
            </div>
          </div>
        </div>

        <div className="absolute left-0 right-0 bottom-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" className="w-full h-14 text-white/6" preserveAspectRatio="none">
            <path d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </header>
  );
}

