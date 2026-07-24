import Link from "next/link";
import SolutionIllustration from "./SolutionIllustration";

export default function ServiceCard({
  code,
  title,
  description,
  href,
  illustration,
}: {
  code: string;
  title: string;
  description: string;
  href: string;
  illustration?: "sih" | "ris" | "pacs" | "equipement" | "ingenierie" | "location";
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-lg border border-line bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-rimed hover:shadow-[0_8px_28px_-12px_rgba(15,45,82,0.25)]"
    >
      {illustration && <SolutionIllustration type={illustration} className="mb-5 w-16 shrink-0" />}
      <span className="font-mono text-xs text-rimed/70">{code}</span>
      <h3 className="mt-3 font-display text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-slate">{description}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-rimed">
        En savoir plus
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
