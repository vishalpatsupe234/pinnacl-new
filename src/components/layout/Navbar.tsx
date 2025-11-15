"use client";
import React from "react";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/brand/logo.png" alt="Brand" style={{ height: 44 }} />
          <span className="font-semibold text-lg">Pinnacl Properties</span>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#featured-properties" className="hover:underline">Projects</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="inline-block px-4 py-2 rounded-full border bg-black text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}
