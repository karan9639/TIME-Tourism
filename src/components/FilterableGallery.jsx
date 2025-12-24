"use client";

import { useMemo, useState } from "react";
import CloudinaryGallery from "./CloudinaryGallery";

/**
 * FilterableGallery (Corrected / Modular)
 * - Builds categories from image data (no manual sync required)
 * - Uses stable category ids
 * - Delegates rendering + lightbox to CloudinaryGallery
 * - Works with your existing usage:
 *   <FilterableGallery images={demoGalleryImages} layout="grid" columns={3} aspectRatio="landscape" enableLightbox />
 */

function titleCase(s) {
  return String(s || "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

export default function FilterableGallery({
  images = [],
  layout = "grid",
  columns = 3,
  aspectRatio = "landscape",
  enableLightbox = true,
  className = "",
  // Optional: if you want fixed labels per category id
  categoryLabels = {},
  showCounts = true,
}) {
  const normalizedImages = useMemo(() => {
    return (Array.isArray(images) ? images : []).map((img) => ({
      ...img,
      category: (img?.category || "").trim(),
    }));
  }, [images]);

  const categories = useMemo(() => {
    const set = new Set();
    for (const img of normalizedImages) {
      if (img.category) set.add(img.category);
    }
    const list = Array.from(set);
    list.sort((a, b) => a.localeCompare(b));
    return ["all", ...list];
  }, [normalizedImages]);

  const counts = useMemo(() => {
    const map = new Map();
    for (const cat of categories) map.set(cat, 0);
    for (const img of normalizedImages) {
      const c = img.category || "";
      if (c && map.has(c)) map.set(c, map.get(c) + 1);
    }
    map.set("all", normalizedImages.length);
    return map;
  }, [categories, normalizedImages]);

  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") return normalizedImages;
    return normalizedImages.filter((img) => img.category === activeCategory);
  }, [normalizedImages, activeCategory]);

  return (
    <section className={className} aria-label="Filterable photo gallery">
      {/* Filters */}
      <div className="flex flex-wrap gap-2 sm:gap-3 items-center justify-center mb-8">
        {categories.map((cat) => {
          const label =
            cat === "all"
              ? "All Photos"
              : categoryLabels[cat] || titleCase(cat);
          const isActive = activeCategory === cat;
          const count = counts.get(cat) ?? 0;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={[
                "px-4 py-2 rounded-full text-sm font-medium transition-colors border",
                isActive
                  ? "bg-terracotta-500 text-white border-terracotta-500"
                  : "bg-white text-charcoal border-sand-200 hover:border-terracotta-300 hover:text-terracotta-600",
              ].join(" ")}
              aria-pressed={isActive}
            >
              {label}
              {showCounts ? (
                <span className="ml-2 opacity-80">({count})</span>
              ) : null}
            </button>
          );
        })}
      </div>

      {/* Gallery */}
      <CloudinaryGallery
        images={filtered}
        layout={layout}
        columns={columns}
        aspectRatio={aspectRatio}
        enableLightbox={enableLightbox}
      />
    </section>
  );
}
