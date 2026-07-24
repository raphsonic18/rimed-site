"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const SLIDES = [
  {
    src: "/carousel/biomedical.jpg",
    alt: "Technicien biomédical devant un scanner en salle d'imagerie",
    label: "Biomédical",
    caption: "Installation et maintenance des équipements médicaux",
  },
  {
    src: "/carousel/pacs.jpg",
    alt: "Médecins consultant des images DICOM sur plusieurs écrans",
    label: "PACS",
    caption: "Archivage et communication d'images médicales",
  },
  {
    src: "/carousel/ris.jpg",
    alt: "Équipe soignante consultant un dossier radiologique sur écrans",
    label: "RIS",
    caption: "Planification et suivi du parcours d'imagerie",
  },
  {
    src: "/carousel/sih.jpg",
    alt: "Équipe de direction hospitalière analysant des tableaux de bord",
    label: "SIH",
    caption: "Pilotage et interopérabilité du système hospitalier",
  },
] as const;

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i: number) => {
    setIndex((i + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-lg border border-line bg-white">
      <div className="relative aspect-[16/9] w-full">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="object-cover"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <span className="font-mono text-xs uppercase tracking-wide text-white/70">
                {slide.label}
              </span>
              <p className="mt-1 max-w-md font-display text-lg font-semibold text-white md:text-xl">
                {slide.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Image précédente"
        className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink shadow transition-colors hover:bg-white"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Image suivante"
        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink shadow transition-colors hover:bg-white"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 right-6 flex gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Aller à la diapositive ${slide.label}`}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index ? "w-5 bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
