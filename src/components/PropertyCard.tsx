"use client";
import React from "react";

export type Property = {
  id: string | number;
  title: string;
  location?: string;
  price?: string;
  beds?: number;
  baths?: number;
  area?: string;
  image: string; // relative path under /public
};

export default function PropertyCard({ p }: { p: Property }) {
  return (
    <article className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
      <div className="relative">
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-56 object-cover"
        />
        <div className="absolute left-4 top-4 bg-black/60 text-white rounded-full px-3 py-1 text-xs">
          {p.beds} beds · {p.baths} baths
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="mt-1 text-sm text-gray-500">{p.location}</p>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-lg font-bold">{p.price}</div>
            <div className="text-xs text-gray-400">{p.area}</div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center px-4 py-2 rounded-full border bg-black text-white text-sm font-medium"
          >
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}
