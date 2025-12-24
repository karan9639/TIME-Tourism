"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

/**
 * CloudinaryGallery Component (Corrected)
 * - Lightbox renders in a Portal (fixes "not full screen" when parent has transform)
 * - Robust scroll lock + cleanup
 * - Stable keys (uses image.id || image.url)
 * - Better semantic HTML (buttons, figure/figcaption)
 * - Safer image fallback (prevents infinite error loop)
 * - Improved responsive sizing using dvh/dvw
 */

const DEFAULT_PLACEHOLDER = (q = "travel destination", w = 1200, h = 800) =>
  `/placeholder.svg?height=${h}&width=${w}&query=${encodeURIComponent(q)}`;

function getImageId(image, index) {
  return (
    image?.id ||
    image?.publicId ||
    image?.url ||
    `${image?.title || "img"}-${index}`
  );
}

function LightboxPortal({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

function useBodyScrollLock(enabled) {
  const prevOverflow = useRef(null);
  const prevPaddingRight = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    prevOverflow.current = document.body.style.overflow;
    prevPaddingRight.current = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0)
      document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = prevOverflow.current ?? "";
      document.body.style.paddingRight = prevPaddingRight.current ?? "";
    };
  }, [enabled]);
}

export default function CloudinaryGallery({
  images = [],
  layout = "grid", // 'grid' | 'masonry' | 'bento' | 'carousel'
  columns = 3,
  enableLightbox = true,
  aspectRatio = "landscape", // 'square' | 'portrait' | 'landscape' | 'auto'
  className = "",
}) {
  const normalizedImages = useMemo(() => {
    return (Array.isArray(images) ? images : []).map((img, idx) => ({
      ...img,
      id: getImageId(img, idx),
      alt: img?.alt || img?.title || "Travel photo",
      url: img?.url || "",
      title: img?.title || "",
      category: img?.category || "",
    }));
  }, [images]);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const closeBtnRef = useRef(null);
  const lastActiveElRef = useRef(null);

  useBodyScrollLock(lightboxOpen && enableLightbox);

  const hasImages = normalizedImages.length > 0;
  const safeIndex = Math.min(
    currentIndex,
    Math.max(0, normalizedImages.length - 1)
  );
  const currentImage = hasImages ? normalizedImages[safeIndex] : null;

  // Keep index valid if images change
  useEffect(() => {
    if (!hasImages) {
      setCurrentIndex(0);
      setLightboxOpen(false);
      return;
    }
    if (currentIndex >= normalizedImages.length) setCurrentIndex(0);
  }, [hasImages, currentIndex, normalizedImages.length]);

  const openLightbox = useCallback(
    (index, triggerEl) => {
      if (!enableLightbox || !hasImages) return;
      lastActiveElRef.current = triggerEl || document.activeElement;
      setCurrentIndex(index);
      setLightboxOpen(true);
    },
    [enableLightbox, hasImages]
  );

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    // restore focus
    const el = lastActiveElRef.current;
    if (el && typeof el.focus === "function") el.focus();
  }, []);

  const goPrev = useCallback(() => {
    if (!hasImages) return;
    setCurrentIndex((prev) =>
      prev === 0 ? normalizedImages.length - 1 : prev - 1
    );
  }, [hasImages, normalizedImages.length]);

  const goNext = useCallback(() => {
    if (!hasImages) return;
    setCurrentIndex((prev) =>
      prev === normalizedImages.length - 1 ? 0 : prev + 1
    );
  }, [hasImages, normalizedImages.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Tab") {
        // simple focus trap: keep focus on close button if it exists
        if (closeBtnRef.current) {
          e.preventDefault();
          closeBtnRef.current.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen, closeLightbox, goPrev, goNext]);

  // Focus close button on open
  useEffect(() => {
    if (lightboxOpen) closeBtnRef.current?.focus();
  }, [lightboxOpen]);

  const getAspectClass = () => {
    switch (aspectRatio) {
      case "square":
        return "aspect-square";
      case "portrait":
        return "aspect-[3/4]";
      case "landscape":
        return "aspect-[4/3]";
      case "auto":
        return ""; // allow natural aspect via wrapper choices
      default:
        return "aspect-[4/3]";
    }
  };

  const getGridClass = () => {
    const columnMap = {
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
      5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
    };
    return columnMap[columns] || columnMap[3];
  };

  const renderLayout = () => {
    switch (layout) {
      case "masonry":
        return (
          <MasonryLayout
            images={normalizedImages}
            onImageClick={openLightbox}
          />
        );
      case "bento":
        return (
          <BentoLayout images={normalizedImages} onImageClick={openLightbox} />
        );
      case "carousel":
        return (
          <CarouselLayout
            images={normalizedImages}
            onImageClick={openLightbox}
            aspectClass={getAspectClass()}
          />
        );
      case "grid":
      default:
        return (
          <div className={`grid ${getGridClass()} gap-3 sm:gap-4 md:gap-6`}>
            {normalizedImages.map((image, index) => (
              <GalleryTile
                key={image.id}
                image={image}
                index={index}
                onOpen={openLightbox}
                aspectClass={getAspectClass()}
              />
            ))}
          </div>
        );
    }
  };

  return (
    <>
      <div className={`cloudinary-gallery ${className}`}>{renderLayout()}</div>

      {lightboxOpen && enableLightbox && hasImages && currentImage && (
        <LightboxPortal>
          <div
    className="fixed inset-0 z-[9999] bg-black/95 w-[100dvw] h-[100dvh] flex items-center justify-center p-2 sm:p-6"
    role="dialog"
    aria-modal="true"
    aria-label="Image lightbox"
    onClick={closeLightbox} // ✅ click anywhere on backdrop closes
  >
    {/* IMPORTANT: stop clicks inside content from closing */}
    <figure
      className="w-full h-full max-w-6xl mx-auto flex flex-col items-center justify-center"
      onClick={(e) => e.stopPropagation()} // ✅ clicking image/caption won't close
    >
      {/* Close */}
      <button
        ref={closeBtnRef}
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          closeLightbox()
        }}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 text-white hover:text-terracotta-400 transition-colors p-2 bg-black/50 rounded-full"
        aria-label="Close lightbox"
      >
        <X size={24} className="sm:w-8 sm:h-8" />
      </button>

            {/* Arrows */}
            {normalizedImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-terracotta-400 transition-colors p-2 z-10 bg-black/50 rounded-full"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={32} className="sm:w-12 sm:h-12" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:text-terracotta-400 transition-colors p-2 z-10 bg-black/50 rounded-full"
                  aria-label="Next image"
                >
                  <ChevronRight size={32} className="sm:w-12 sm:h-12" />
                </button>
              </>
            )}

            {/* Content */}
            <figure className="w-full h-full max-w-6xl mx-auto flex flex-col items-center justify-center">
              <div className="relative w-full flex-1 min-h-0 flex items-center justify-center">
                <img
                  src={
                    currentImage.url ||
                    DEFAULT_PLACEHOLDER(currentImage.alt, 1400, 900)
                  }
                  alt={currentImage.alt}
                  className="max-w-full max-h-[85dvh] object-contain rounded"
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.dataset.fallbackApplied) return;
                    img.dataset.fallbackApplied = "true";
                    img.src = DEFAULT_PLACEHOLDER(currentImage.alt, 1400, 900);
                  }}
                />
              </div>

              <figcaption className="mt-2 sm:mt-4 text-center px-4">
                {currentImage.title ? (
                  <p className="text-white text-base sm:text-lg font-medium">
                    {currentImage.title}
                  </p>
                ) : null}
                <p className="text-white/60 text-sm mt-1">
                  {safeIndex + 1} / {normalizedImages.length}
                </p>
              </figcaption>
            </figure>
            </figure>
          </div>
        </LightboxPortal>
      )}
    </>
  );
}

function GalleryTile({ image, index, onOpen, aspectClass }) {
  const [errored, setErrored] = useState(false);
  const btnRef = useRef(null);

  const src = errored
    ? DEFAULT_PLACEHOLDER(image.alt, 800, 600)
    : image.url || DEFAULT_PLACEHOLDER(image.alt, 800, 600);

  // Wrapper-based aspect ratio is more reliable than applying aspect-* to img
  const useAspectWrapper = aspectClass && aspectClass !== "";

  return (
    <figure className="m-0">
      <button
        ref={btnRef}
        type="button"
        className="group relative overflow-hidden cursor-pointer bg-sand-200 rounded-lg w-full text-left focus:outline-none focus:ring-2 focus:ring-terracotta-400"
        onClick={() => onOpen(index, btnRef.current)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpen(index, btnRef.current);
          }
        }}
        aria-label={image.title ? `Open image: ${image.title}` : "Open image"}
      >
        {useAspectWrapper ? (
          <div className={`relative w-full ${aspectClass} overflow-hidden`}>
            <img
              src={src}
              alt={image.alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              decoding="async"
              onError={() => setErrored(true)}
            />
          </div>
        ) : (
          <img
            src={src}
            alt={image.alt}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            decoding="async"
            onError={() => setErrored(true)}
          />
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Maximize2 className="text-white" size={28} />
        </div>

        {/* Caption */}
        {image.title ? (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 sm:transform sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-white text-sm font-medium">{image.title}</p>
          </div>
        ) : null}
      </button>

      {/* optional semantic caption for SEO/accessibility */}
      {image.title ? (
        <figcaption className="sr-only">{image.title}</figcaption>
      ) : null}
    </figure>
  );
}

function MasonryLayout({ images, onImageClick }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-4 md:gap-6">
      {images.map((image, index) => (
        <div key={image.id} className="break-inside-avoid mb-3 sm:mb-4 md:mb-6">
          {/* For masonry, avoid forced aspect cropping */}
          <GalleryTile
            image={image}
            index={index}
            onOpen={onImageClick}
            aspectClass=""
          />
        </div>
      ))}
    </div>
  );
}

function BentoLayout({ images, onImageClick }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 auto-rows-[120px] sm:auto-rows-[150px] md:auto-rows-[180px] lg:auto-rows-[200px]">
      {images.map((image, index) => {
        let gridClass = "col-span-1 row-span-1";
        if (index % 7 === 0) gridClass = "col-span-2 row-span-2";
        else if (index % 5 === 0) gridClass = "col-span-2 row-span-1";
        else if (index % 3 === 0) gridClass = "col-span-1 row-span-2";

        return (
          <BentoTile
            key={image.id}
            image={image}
            index={index}
            gridClass={gridClass}
            onOpen={onImageClick}
          />
        );
      })}
    </div>
  );
}

function BentoTile({ image, index, gridClass, onOpen }) {
  const [errored, setErrored] = useState(false);
  const btnRef = useRef(null);

  const src = errored
    ? DEFAULT_PLACEHOLDER(image.alt, 800, 600)
    : image.url || DEFAULT_PLACEHOLDER(image.alt, 800, 600);

  return (
    <button
      ref={btnRef}
      type="button"
      className={`${gridClass} group relative overflow-hidden cursor-pointer bg-sand-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-400`}
      onClick={() => onOpen(index, btnRef.current)}
      aria-label={image.title ? `Open image: ${image.title}` : "Open image"}
    >
      <img
        src={src}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
        decoding="async"
        onError={() => setErrored(true)}
      />
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <Maximize2 className="text-white" size={24} />
      </div>
      {image.title ? (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3">
          <p className="text-white text-xs sm:text-sm font-medium truncate">
            {image.title}
          </p>
        </div>
      ) : null}
    </button>
  );
}

function CarouselLayout({ images, onImageClick, aspectClass }) {
  const scrollerRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const updateButtons = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 0);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    updateButtons();
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => updateButtons();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateButtons);
    };
  }, [updateButtons]);

  const scrollByOne = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-carousel-card]");
    const cardWidth = card
      ? card.getBoundingClientRect().width
      : el.clientWidth;
    el.scrollBy({ left: dir * (cardWidth + 16), behavior: "smooth" });
  };

  return (
    <div className="relative">
      {canLeft && (
        <button
          type="button"
          onClick={() => scrollByOne(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 sm:p-3 shadow-lg rounded-full -ml-2 sm:-ml-4"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
        </button>
      )}

      <div
        ref={scrollerRef}
        className="overflow-x-auto scroll-smooth snap-x snap-mandatory rounded-lg"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex gap-4 p-1">
          {images.map((image, index) => (
            <div
              key={image.id}
              data-carousel-card
              className="snap-start shrink-0 w-[85%] sm:w-[48%] lg:w-[32%]"
            >
              <GalleryTile
                image={image}
                index={index}
                onOpen={onImageClick}
                aspectClass={aspectClass}
              />
            </div>
          ))}
        </div>
      </div>

      {canRight && (
        <button
          type="button"
          onClick={() => scrollByOne(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 sm:p-3 shadow-lg rounded-full -mr-2 sm:-mr-4"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      )}
    </div>
  );
}
