import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo dark />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Vente et maintenance d&apos;équipements médicaux, industriels,
              de médecine nucléaire et consommables — intégration de
              solutions SIH, RIS et PACS — ingénierie d&apos;hélipads,
              héliports et construction — location d&apos;avion privé et de
              résidence privée.
            </p>
          </div>

          <div>
            <p className="eyebrow text-white/40">Navigation</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link href="/solutions" className="hover:text-white">Solutions SIH · RIS · PACS</Link></li>
              <li><Link href="/equipements" className="hover:text-white">Équipements & maintenance</Link></li>
              <li><Link href="/ingenierie" className="hover:text-white">Ingénierie & construction</Link></li>
              <li><Link href="/location" className="hover:text-white">Location</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-white/40">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a href="mailto:serge.soh@rimedci.com" className="hover:text-white">serge.soh@rimedci.com</a>
              </li>
              <li>
                <a href="mailto:info@rimedci.com" className="hover:text-white">info@rimedci.com</a>
              </li>
              <li>
                <a href="tel:+2252227195077" className="hover:text-white">+225 22 27 19 50 77</a>
              </li>
              <li className="text-white/50">Cocody angre 9e tranche star 14, Abidjan, Côte d&apos;Ivoire</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Rimed. Tous droits réservés.</p>
          <p className="font-mono">Astreinte technique 24/7 — équipements critiques</p>
        </div>
      </div>
    </footer>
  );
}
