"use client";
import React from "react";

type HeroProps = {
  title?: string;
  subtitle?: string;
  poster?: string;
  videoMp4?: string;
  whatsappNumber?: string;
};

export default function Hero({
  title = "Every home reflects you",
  subtitle = "Handpicked residences — curated for lifestyle & comfort",
  poster = "/brand/hero-bg-2.jpg",
  videoMp4 = "/brand/hero-video.mp4",
  whatsappNumber = "919146238303",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {videoMp4 ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={poster}
          >
            <source src={videoMp4} type="video/mp4" />
          </video>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${poster})` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-28 md:py-36 lg:py-44">
        <div className="max-w-3xl text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90">{subtitle}</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="#featured-properties"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black font-semibold shadow-lg hover:scale-[1.01] transition transform"
            >
              View Featured Properties
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white text-white/95 hover:bg-white/10 transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
