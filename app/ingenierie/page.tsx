import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import Waveform from "@/components/Waveform";
import HelicopterBadge from "@/components/HelicopterBadge";

export const metadata: Metadata = {
  title: "Ingénierie, hélipads & construction — Rimed",
  description:
    "Étude, création et équipement d'hélipads et héliports pour hélicoptère médicalisé, et construction de bâtiments publics et privés.",
};

const HELIPORT_FEATURES = [
  "Étude et conception d'hélipads et héliports",
  "Aires équipées pour l'accueil d'un hélicoptère médicalisé (évacuation sanitaire, SAMU)",
  "Balisage, signalétique au sol et éclairage nocturne réglementaires",
  "Dossier technique et coordination avec les autorités de l'aviation civile",
];

const HELIPORT_SPECS = [
  { k: "Type d'aire", v: "Hélisurface ou héliport" },
  { k: "Vocation", v: "Hélicoptère médicalisé" },
  { k: "Conformité", v: "Normes aéronautiques applicables" },
];

const CONSTRUCTION_FEATURES = [
  "Construction et réhabilitation de bâtiments publics (santé, administration)",
  "Construction de bâtiments privés — résidentiel et tertiaire",
  "Gros œuvre, second œuvre et VRD",
  "Coordination avec les lots techniques et biomédicaux dès la conception",
];

const CONSTRUCTION_SPECS = [
  { k: "Maîtrise d'ouvrage", v: "Publique ou privée" },
  { k: "Périmètre", v: "Neuf ou réhabilitation" },
  { k: "Suivi", v: "Chantier piloté de bout en bout" },
];

export default function IngenieriePage() {
  return (
    <>
      {/* HERO */}
      <section className="trace-grid border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
          <div>
            <Eyebrow>Ingénierie & construction</Eyebrow>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink md:text-[3.25rem]">
              Des hélipads à l&apos;immobilier, un même savoir-faire
              d&apos;ingénierie.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate">
              Rimed conçoit et réalise des hélipads et héliports équipés pour
              l&apos;hélicoptère médicalisé, ainsi que des bâtiments publics
              et privés, du dossier technique jusqu&apos;à la réception de
              chantier.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-rimed"
              >
                Étudier un projet
              </Link>
              <Link
                href="/equipements"
                className="rounded-md border border-line bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-rimed hover:text-rimed"
              >
                Voir les équipements
              </Link>
            </div>
          </div>

          <div className="relative flex flex-col justify-center">
            <div className="relative overflow-hidden rounded-lg border border-line bg-white">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/ingenierie/heliport.jpg"
                  alt="Chantier de construction d'un hélipad en béton avec grues"
                  fill
                  sizes="(min-width: 768px) 34rem, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <HelicopterBadge className="absolute -top-5 -right-5" />
          </div>
        </div>
      </section>

      {/* HELIPADS & HELIPORTS */}
      <section id="heliports" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="font-mono text-xs text-rimed/70">Aéronautique sanitaire</span>
            <h2 className="mt-3 font-display text-2xl font-bold text-ink md:text-3xl">
              Hélipads & héliports pour hélicoptère médicalisé
            </h2>
            <p className="mt-4 max-w-xl text-slate">
              Rimed étudie et réalise des aires d&apos;atterrissage dédiées à
              l&apos;évacuation sanitaire héliportée, au plus près des
              établissements de santé.
            </p>

            <ul className="mt-8 space-y-3">
              {HELIPORT_FEATURES.map((f) => (
                <li key={f} className="flex gap-3 text-[0.95rem] text-slate-dark">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="h-fit rounded-lg border border-line bg-bg p-6">
            <p className="eyebrow text-slate">Fiche technique</p>
            <dl className="mt-4 space-y-4">
              {HELIPORT_SPECS.map((s) => (
                <div key={s.k} className="border-t border-line pt-3 first:border-t-0 first:pt-0">
                  <dt className="text-xs uppercase tracking-wide text-slate/70">{s.k}</dt>
                  <dd className="mt-1 font-mono text-sm text-ink">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <Waveform className="mx-auto h-8 w-full max-w-6xl px-6" color="#DCE6EE" spikeColor="#1D5A96" />

      {/* CONSTRUCTION */}
      <section id="construction" className="scroll-mt-24 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="font-mono text-xs text-rimed/70">Bâtiment</span>
            <h2 className="mt-3 font-display text-2xl font-bold text-ink md:text-3xl">
              Construction de bâtiments publics et privés
            </h2>
            <p className="mt-4 max-w-xl text-slate">
              Du bâtiment public à la résidence privée, Rimed pilote la
              construction et la réhabilitation en coordination avec les
              équipements techniques et biomédicaux du site.
            </p>

            <ul className="mt-8 space-y-3">
              {CONSTRUCTION_FEATURES.map((f) => (
                <li key={f} className="flex gap-3 text-[0.95rem] text-slate-dark">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="h-fit rounded-lg border border-line bg-bg p-6">
            <p className="eyebrow text-slate">Fiche technique</p>
            <dl className="mt-4 space-y-4">
              {CONSTRUCTION_SPECS.map((s) => (
                <div key={s.k} className="border-t border-line pt-3 first:border-t-0 first:pt-0">
                  <dt className="text-xs uppercase tracking-wide text-slate/70">{s.k}</dt>
                  <dd className="mt-1 font-mono text-sm text-ink">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
              Un hélipad ou un bâtiment à concevoir ?
            </h2>
            <p className="mt-3 max-w-lg text-white/60">
              Décrivez-nous votre site et vos contraintes : nous cadrons
              l&apos;étude technique et réglementaire avec vous.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-md bg-signal px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-signal/90"
          >
            Contacter Rimed
          </Link>
        </div>
      </section>
    </>
  );
}
