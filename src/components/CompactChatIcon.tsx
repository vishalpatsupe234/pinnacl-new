"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function CompactChatIcon() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="flex items-center gap-4 px-4 py-2">
        <Link href="/" className="text-sm font-semibold">Pinnacl</Link>

        <div className="ml-auto flex items-center gap-3">
          <div className="hidden md:flex items-center gap-4 text-sm">
            <Link href="/properties">Properties</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <button aria-label="Toggle menu" onClick={() => setOpen(s => !s)} className="md:hidden p-2 rounded-md hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          </button>

          <a href="https://wa.me/919146238303" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F7DE9E] to-[#D4AF37] px-3 py-2 text-sm font-medium">
            💬 Chat
          </a>
        </div>
      </nav>

      {open && (
        <div className="md:hidden absolute right-4 top-14 w-48 bg-white shadow-lg rounded-md p-3 z-50">
          <Link href="/properties" className="block py-2 text-sm">Properties</Link>
          <Link href="/about" className="block py-2 text-sm">About</Link>
          <Link href="/contact" className="block py-2 text-sm">Contact</Link>
        </div>
      )}
    </div>
  );
}

