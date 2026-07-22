export default function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`eyebrow flex items-center gap-2 ${light ? "text-white/50" : "text-rimed"}`}>
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal" />
      {children}
    </p>
  );
}
