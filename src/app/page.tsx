// app/page.tsx
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

export default function HomePage() {
  return (
    <>
     
      <main className="bg-white min-h-screen">
        <Hero
          title="Every home reflects you"
          subtitle="Handpicked residences — curated for lifestyle & comfort"
          poster="/brand/hero-bg-2.jpg"
          videoMp4="/brand/hero-video.mp4"
          whatsappNumber="919146238303"
        />

        <section id="featured-properties" className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {properties.slice(0, 3).map((p) => (
              <PropertyCard key={p.id} p={p} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
