// src/components/sections/Hero.tsx
import React from "react";

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero video">
      {/* Fullscreen background video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay to keep contrast for any future content */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* If you want absolutely nothing on top of video, comment/remove hero-content */}
      {/*
      <div className="hero-content">
        <h1 className="hero-title">Luxury Homes</h1>
        <p className="hero-sub">Curated for lifestyle, comfort & trust.</p>
      </div>
      */}
    </section>
  );
}
