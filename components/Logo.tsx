import Image from "next/image";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center ${
        dark ? "rounded-md bg-white px-3 py-1.5" : ""
      }`}
    >
      <Image
        src="/logo.png"
        alt="Rimed — vente et maintenance d'équipements médicaux, industriels et consommables"
        width={176}
        height={88}
        priority
        className="h-full w-auto"
      />
      <span className="sr-only">— solutions SIH, RIS, PACS et équipements biomédicaux</span>
    </span>
  );
}
