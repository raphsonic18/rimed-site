import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Rimed",
  description:
    "Contactez Rimed pour un projet SIH, RIS, PACS, un devis d'équipement biomédical ou un contrat de maintenance.",
};

export default function ContactPage() {
  return (
    <section className="trace-grid">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-ink">
            Parlons de votre établissement
          </h1>
          <p className="mt-6 max-w-md text-slate">
            Décrivez votre besoin — solution logicielle, équipement ou
            maintenance — et un interlocuteur Rimed revient vers vous avec
            une réponse concrète.
          </p>

          <dl className="mt-10 space-y-6 border-t border-line pt-8">
            <div>
              <dt className="eyebrow text-slate">E-mail</dt>
              <dd className="mt-1">
                <a href="mailto:info@rimedci.com" className="text-ink hover:text-rimed">
                  info@rimedci.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-slate">Téléphone</dt>
              <dd className="mt-1">
                <a href="tel:+2250000000000" className="text-ink hover:text-rimed">
                  +225 22 27 50 19 77
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-slate">Adresse</dt>
              <dd className="mt-1 text-ink">Abidjan cocody angre 9e tranche star 14, Côte d&apos;Ivoire</dd>
            </div>
            <div>
              <dt className="eyebrow text-slate">Astreinte</dt>
              <dd className="mt-1 text-ink">24/7 pour les équipements critiques</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-lg border border-line bg-white p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
