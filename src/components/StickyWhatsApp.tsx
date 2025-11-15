"use client";
import React from "react";

export default function StickyWhatsApp({ number = "919146238303" }: { number?: string }) {
  return (
    <a
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      style={{
        position: "fixed",
        right: 18,
        bottom: 18,
        zIndex: 60,
      }}
    >
      <div style={{ width: 56, height: 56, borderRadius: 9999, background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 18px rgba(0,0,0,0.12)" }}>
        <img src="/brand/logo-icon.png" alt="whatsapp" style={{ width: 28, height: 28 }} />
      </div>
    </a>
  );
}
