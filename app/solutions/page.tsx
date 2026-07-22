import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import Waveform from "@/components/Waveform";
import SolutionIllustration from "@/components/SolutionIllustration";

export const metadata: Metadata = {
  title: "Solutions SIH, RIS & PACS — Rimed",
  description:
    "Déploiement et intégration de Systèmes d'Information Hospitalier (SIH), de Systèmes d'Information Radiologique (RIS) et de PACS interopérables HL7 et DICOM.",
};

const MODULES = [
  {
    id: "sih",
    code: "SIH",
    illustration: "sih" as const,
    title: "Système d'Information Hospitalier",
    intro:
      "Le socle qui centralise le dossier patient, la gestion des lits, la facturation et le pilotage administratif de l'établissement.",
    features: [
      "Dossier patient informatisé partagé entre services",
      "Gestion des admissions, mouvements et lits en temps réel",
      "Facturation, tiers payant et pilotage budgétaire",
      "Tableaux de bord d'activité pour la direction médicale",
    ],
    specs: [
      { k: "Interopérabilité", v: "HL7 v2 / FHIR" },
      { k: "Hébergement", v: "Sur site ou cloud sécurisé" },
      { k: "Utilisateurs", v: "Multi-services, multi-sites" },
    ],
  },
  {
    id: "ris",
    code: "RIS",
    illustration: "ris" as const,
    title: "Système d'Information Radiologique",
    intro:
      "Le fil conducteur du service d'imagerie : de la demande d'examen au compte rendu validé, connecté au PACS et au SIH.",
    features: [
      "Prise de rendez-vous et planification des vacations",
      "Protocoles d'examen et comptes rendus structurés",
      "Suivi de la dosimétrie et traçabilité des actes",
      "Statistiques d'activité par modalité et par praticien",
    ],
    specs: [
      { k: "Interopérabilité", v: "HL7, DICOM Worklist" },
      { k: "Modalités couvertes", v: "Radio, scanner, IRM, échographie" },
      { k: "Connecté à", v: "PACS et SIH en temps réel" },
    ],
  },
  {
    id: "pacs",
    code: "PACS",
    illustration: "pacs" as const,
    title: "Archivage & communication d'images médicales",
    intro:
      "L'acquisition, le stockage et la diffusion sécurisés des images DICOM vers les postes de lecture, la téléradiologie et les cliniciens.",
    features: [
      "Acquisition depuis toutes modalités compatibles DICOM",
      "Archivage sécurisé avec plan de sauvegarde et de reprise",
      "Diffusion vers postes de lecture et viewers web",
      "Téléradiologie et second avis à distance",
    ],
    specs: [
      { k: "Standard", v: "DICOM 3.0" },
      { k: "Capacité", v: "Dimensionnée selon volumétrie d'examens" },
      { k: "Accès distant", v: "Viewer web sécurisé" },
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="trace-grid border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Eyebrow>Solutions logicielles</Eyebrow>
          <h1 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-tight text-ink">
            SIH, RIS et PACS : trois systèmes, une seule donnée patient
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate">
            Chaque module peut être déployé seul ou intégré aux autres, avec
            les mêmes standards d&apos;interopérabilité — pour que
            l&apos;information circule du secrétariat jusqu&apos;à la salle
            d&apos;imagerie sans ressaisie.
          </p>
        </div>
      </section>

      {MODULES.map((m, i) => (
        <section
          key={m.id}
          id={m.id}
          className={`scroll-mt-24 border-b border-line ${i % 2 === 1 ? "bg-white" : ""}`}
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="font-mono text-xs text-rimed/70">{m.code}</span>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink md:text-3xl">
                {m.title}
              </h2>
              <p className="mt-4 max-w-xl text-slate">{m.intro}</p>

              <ul className="mt-8 space-y-3">
                {m.features.map((f) => (
                  <li key={f} className="flex gap-3 text-[0.95rem] text-slate-dark">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-fit rounded-lg border border-line bg-bg p-6">
              <SolutionIllustration type={m.illustration} className="w-full max-w-[10rem]" />
              <p className="mt-6 eyebrow text-slate">Fiche technique</p>
              <dl className="mt-4 space-y-4">
                {m.specs.map((s) => (
                  <div key={s.k} className="border-t border-line pt-3 first:border-t-0 first:pt-0">
                    <dt className="text-xs uppercase tracking-wide text-slate/70">{s.k}</dt>
                    <dd className="mt-1 font-mono text-sm text-ink">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      ))}

      <Waveform className="mx-auto h-8 w-full max-w-6xl px-6" color="#DCE6EE" spikeColor="#1D5A96" />

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
          Un existant à faire évoluer, un projet à cadrer ?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-slate">
          Nous auditons votre système d&apos;information actuel avant toute
          recommandation.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-block rounded-md bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-rimed"
        >
          Planifier un échange
        </Link>
      </section>
    </>
  );
}
