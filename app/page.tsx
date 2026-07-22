import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import Waveform from "@/components/Waveform";
import ServiceCard from "@/components/ServiceCard";

const STATS = [
  { value: "15+", label: "ans sur le terrain biomédical" },
  { value: "24/7", label: "astreinte équipements critiques" },
  { value: "SIH·RIS·PACS", label: "intégration bout en bout" },
];

const DOMAINS = [
  {
    code: "01 — SIH",
    title: "Système d'Information Hospitalier",
    description:
      "Dossier patient, circuit administratif, facturation et pilotage de l'établissement réunis dans un système unique et interopérable.",
    href: "/solutions#sih",
    illustration: "sih" as const,
  },
  {
    code: "02 — RIS",
    title: "Système d'Information Radiologique",
    description:
      "Planification des examens, comptes rendus structurés et suivi du parcours d'imagerie, connectés à votre PACS et à votre SIH.",
    href: "/solutions#ris",
    illustration: "ris" as const,
  },
  {
    code: "03 — PACS",
    title: "Archivage & communication d'images",
    description:
      "Acquisition, stockage sécurisé et diffusion des images médicales (DICOM) vers les postes de lecture et de téléradiologie.",
    href: "/solutions#pacs",
    illustration: "pacs" as const,
  },
  {
    code: "04 — Biomédical",
    title: "Équipements & consommables",
    description:
      "Vente, installation, maintenance préventive et curative des équipements médicaux, industriels et de leurs consommables associés.",
    href: "/equipements",
    illustration: "equipement" as const,
  },
];

const DIFFERENTIATORS = [
  {
    title: "Expertise de terrain",
    description:
      "Des techniciens biomédicaux et ingénieurs logiciels qui interviennent directement dans vos services, pas seulement à distance.",
  },
  {
    title: "Interopérabilité réelle",
    description:
      "Nos déploiements SIH, RIS et PACS communiquent nativement en HL7 et DICOM avec vos équipements existants.",
  },
  {
    title: "Maintenance réactive",
    description:
      "Contrats de maintenance préventive et curative avec des délais d'intervention adaptés aux équipements critiques.",
  },
  {
    title: "Accompagnement & formation",
    description:
      "Formation du personnel médical, technique et administratif à chaque mise en service, pas seulement à la livraison.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="trace-grid border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
          <div>
            <Eyebrow>Rimed — santé & technologie</Eyebrow>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink md:text-[3.25rem]">
              Vos équipements et vos données de santé, sous une même
              surveillance.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate">
              Rimed propose des solutions technologiques et maintient les systèmes qui font tourner un
              établissement de santé : SIH, RIS, PACS d&apos;un côté,
              équipements médicaux et industriels de l&apos;autre — reliés
              par la même exigence de continuité.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/solutions"
                className="rounded-md bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-rimed"
              >
                Découvrir nos solutions
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-line bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-rimed hover:text-rimed"
              >
                Demander un devis
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="rounded-lg border border-line bg-white/70 p-6">
              <Waveform className="h-14 w-full" />
              <dl className="mt-4 grid grid-cols-3 gap-4 border-t border-line pt-5">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-mono text-lg font-semibold text-ink">{s.value}</dd>
                    <p className="mt-1 text-xs leading-snug text-slate">{s.label}</p>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* DOMAINES */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <Eyebrow>Domaines d&apos;activité</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink">
            Deux métiers, une seule continuité de service
          </h2>
          <p className="mt-4 text-slate">
            D&apos;un côté les logiciels qui structurent l&apos;information
            médicale, de l&apos;autre les équipements qui la produisent.
            Rimed intervient sur les deux fronts.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {DOMAINS.map((d) => (
            <ServiceCard key={d.code} {...d} />
          ))}
        </div>
      </section>

      <Waveform className="mx-auto h-8 w-full max-w-6xl px-6" color="#DCE6EE" spikeColor="#1D5A96" />

      {/* DIFFERENCIATEURS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Eyebrow>Pourquoi Rimed</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-bold text-ink">
            Une seule équipe responsable, du câblage au dossier patient
          </h2>

          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {DIFFERENTIATORS.map((d, i) => (
              <div key={d.title} className="flex gap-5">
                <span className="font-mono text-sm text-rimed/60">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{d.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-slate">{d.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTEURS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Eyebrow>Établissements accompagnés</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-bold text-ink">
          Un socle pensé pour le terrain de santé
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {["Hôpitaux & CHU", "Cliniques privées", "Centres d'imagerie", "Laboratoires", "Cabinets radiologiques", "Industrie & consommables"].map(
            (s) => (
              <div key={s} className="rounded-md border border-line bg-white px-4 py-6 text-center">
                <p className="text-sm font-medium text-slate-dark">{s}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
              Un projet SIH, RIS, PACS ou biomédical à cadrer ?
            </h2>
            <p className="mt-3 max-w-lg text-white/60">
              Décrivez-nous votre établissement et vos contraintes : nous
              revenons vers vous avec une recommandation concrète.
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
