export default function Waveform({
  className = "",
  color = "#1D5A96",
  spikeColor = "#E8452F",
}: {
  className?: string;
  color?: string;
  spikeColor?: string;
}) {
  return (
    <svg
      viewBox="0 0 1200 64"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0,32 H420 L448,32 L462,10 L478,54 L492,32 L506,32 L520,18 L534,32 H1200"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx="462" cy="10" r="3.5" fill={spikeColor} className="animate-blink" />
    </svg>
  );
}
