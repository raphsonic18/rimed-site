"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const NAV = [
  { href: "/", label: "Accueil" },
{ href: "/equipements", label: "Équipements & maintenance" },
  { href: "/solutions", label: "Solutions SIH · RIS · PACS" },
  { href: "/ingenierie", label: "Ingénierie & construction" },
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.92rem] font-medium text-slate-dark transition-colors hover:text-rimed"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden shrink-0 rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rimed md:inline-block"
        >
          Demander un devis
        </Link>

        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Ouvrir le menu"
          className="flex flex-col gap-1.5 p-2 md:hidden"
        >
          <span className={`h-[2px] w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-[2px] w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-[2px] w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-6 pb-6 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 text-[0.95rem] font-medium text-slate-dark hover:bg-white hover:text-rimed"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-md bg-ink px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Demander un devis
          </Link>
        </nav>
      )}
    </header>
  );
}
