import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import Waveform from "@/components/Waveform";

export const metadata: Metadata = {
  title: "Équipements biomédicaux & maintenance — Rimed",
  description:
    "Vente, installation et maintenance préventive et curative d'équipements médicaux, industriels et de consommables associés.",
};

const CATEGORIES = [
  {
    title: "Imagerie & diagnostic",
    items: ["Échographes", "Appareils de radiologie", "Électrocardiographes", "Moniteurs de paramètres vitaux"],
  },
  {
    title: "Bloc opératoire & réanimation",
    items: ["Tables d'opération", "Respirateurs & ventilateurs", "Bistouris électriques", "Pousse-seringues"],
  },
  {
    title: "Laboratoire",
    items: ["Automates d'analyse", "Centrifugeuses", "Microscopes", "Réfrigération de laboratoire"],
  },
  {
    title: "Industriel & consommables",
    items: ["Groupes électrogènes & onduleurs", "Climatisation technique", "Consommables médicaux", "Pièces détachées"],
  },
  {
    title: "Médecine nucléaire",
    items: ["Gamma-caméras (scintigraphie)", "TEP-scan (TEP/CT)", "Générateurs de radionucléides", "Fabrication d'isotopes médicaux"],
  },
];

const MAINTENANCE = [
  {
    step: "Diagnostic",
    description: "Audit de l'équipement en place et relevé de son état de fonctionnement réel.",
  },
  {
    step: "Contrat",
    description: "Maintenance préventive planifiée et maintenance curative avec délai d'intervention défini.",
  },
  {
    step: "Intervention",
    description: "Technicien biomédical sur site, pièces d'origine ou compatibles, traçabilité de chaque passage.",
  },
  {
    step: "Suivi",
    description: "Historique de maintenance et recommandations de renouvellement transmis à votre service technique.",
  },
];

export default function EquipementsPage() {
  return (
    <>
      <section className="trace-grid border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Eyebrow>Équipements & maintenance</Eyebrow>
          <h1 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-tight text-ink">
            Vente, installation et maintenance des équipements à la pointe de la technologie médicale et industrielle
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate">
            Rimed fournit et entretient les équipements médicaux, industriels
            et les consommables associés, avec un service technique capable
            d&apos;intervenir directement dans vos locaux.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-rimed"
          >
            Demander un devis équipement
          </Link>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Eyebrow>Catalogue par domaine</Eyebrow>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-bold text-ink">
          Un équipement adapté à chaque service
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <div key={c.title} className="rounded-lg border border-line bg-white p-6">
              <h3 className="font-display text-base font-semibold text-ink">{c.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {c.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-slate">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-rimed" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Waveform className="mx-auto h-8 w-full max-w-6xl px-6" color="#DCE6EE" spikeColor="#1D5A96" />

      {/* MAINTENANCE PROCESS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Eyebrow>Cycle de maintenance</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-bold text-ink">
            Un équipement suivi de son diagnostic à son renouvellement
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MAINTENANCE.map((m, i) => (
              <div key={m.step} className="rounded-lg border border-line bg-bg p-6">
                <span className="font-mono text-xs text-rimed/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">{m.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSOMMABLES */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow>Consommables</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink">
              Un approvisionnement qui ne s&apos;interrompt pas
            </h2>
            <p className="mt-4 text-slate">
              Pièces d&apos;usure et consommables médicaux
              sont proposés en accompagnement de vos équipements, avec un
              suivi des stocks pour éviter les ruptures sur les postes
              critiques.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-white p-7">
            <p className="eyebrow text-slate">Engagement fournisseur</p>
            <ul className="mt-5 space-y-4">
              {[
                "Délais de livraison communiqués à la commande",
                "Compatibilité vérifiée avec le parc existant",
                "Alerte de réapprovisionnement sur demande",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-sm text-slate-dark">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
              Parlez-nous de votre parc d&apos;équipements
            </h2>
            <p className="mt-3 max-w-lg text-white/60">
              Vente, mise en service, contrat de maintenance ou dépannage
              ponctuel — nous cadrons la demande avec votre service technique.
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
