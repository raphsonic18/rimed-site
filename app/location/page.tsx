import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import Waveform from "@/components/Waveform";
import SolutionIllustration from "@/components/SolutionIllustration";

export const metadata: Metadata = {
  title: "Location avion privé & résidence privée — Rimed",
  description:
    "Location d'avion privé pour vos déplacements et de résidences privées meublées, gérées par Rimed.",
};

const OFFERS = [
  {
    id: "avion",
    illustration: "location" as const,
    title: "Location d'avion privé",
    intro:
      "Un affrètement sur mesure pour vos déplacements professionnels ou personnels, y compris les évacuations sanitaires ponctuelles.",
    features: [
      "Affrètement à la demande, vols nationaux et régionaux",
      "Coordination des créneaux et des autorisations de vol",
      "Solution complémentaire aux transferts héliportés",
      "Interlocuteur unique du devis jusqu'au décollage",
    ],
  },
  {
    id: "residence",
    illustration: "location" as const,
    title: "Location de résidence privée",
    intro:
      "Des résidences privées meublées et entretenues, disponibles pour des séjours courts ou prolongés.",
    features: [
      "Résidences meublées, entretien et services inclus",
      "Séjours courts, longs ou missions professionnelles",
      "Sécurité et gardiennage sur demande",
      "Gestion administrative simplifiée pour le locataire",
    ],
  },
];

export default function LocationPage() {
  return (
    <>
      <section className="trace-grid border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Eyebrow>Location</Eyebrow>
          <h1 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-tight text-ink">
            Avion privé et résidence privée, disponibles sur demande
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate">
            En complément de ses activités médicales et techniques, Rimed met
            à disposition un avion privé et des résidences privées pour vos
            déplacements et vos séjours.
          </p>
        </div>
      </section>

      {OFFERS.map((o, i) => (
        <section
          key={o.id}
          id={o.id}
          className={`scroll-mt-24 border-b border-line ${i % 2 === 1 ? "bg-white" : ""}`}
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">{o.title}</h2>
              <p className="mt-4 max-w-xl text-slate">{o.intro}</p>

              <ul className="mt-8 space-y-3">
                {o.features.map((f) => (
                  <li key={f} className="flex gap-3 text-[0.95rem] text-slate-dark">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex h-fit items-center justify-center rounded-lg border border-line bg-bg p-6">
              <SolutionIllustration type={o.illustration} className="w-full max-w-[10rem]" />
            </div>
          </div>
        </section>
      ))}

      <Waveform className="mx-auto h-8 w-full max-w-6xl px-6" color="#DCE6EE" spikeColor="#1D5A96" />

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
          Une location d&apos;avion ou de résidence à organiser ?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-slate">
          Indiquez vos dates et vos besoins, nous revenons vers vous avec les
          disponibilités.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-block rounded-md bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-rimed"
        >
          Demander une disponibilité
        </Link>
      </section>
    </>
  );
}
