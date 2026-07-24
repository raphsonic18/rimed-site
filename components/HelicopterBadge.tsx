export default function HelicopterBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex h-16 w-16 items-center justify-center rounded-full border border-line bg-white shadow-[0_8px_20px_-8px_rgba(15,45,82,0.35)] ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" className="h-10 w-10 overflow-visible">
        {/* rotor de queue */}
        <path d="M46 40 L54 44" stroke="#1D5A96" strokeWidth="2" strokeLinecap="round" />
        {/* poutre de queue */}
        <path d="M40 38 L48 42" stroke="#1D5A96" strokeWidth="2.5" strokeLinecap="round" />
        {/* fuselage */}
        <path
          d="M14 38 C14 30 21 25 30 25 C38 25 43 29 44 35 C45 40 41 43 34 43 L20 43 C16 43 14 41 14 38 Z"
          fill="none"
          stroke="#1D5A96"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* patins */}
        <path d="M18 43 L16 48 M36 43 L38 48 M14 48 H40" stroke="#3E7FBF" strokeWidth="2" strokeLinecap="round" />
        {/* bulle avant */}
        <path d="M14 36 C14 32 17 29 21 29" stroke="#3E7FBF" strokeWidth="1.5" fill="none" />
        {/* croix medicale */}
        <path d="M28 32 V36 M26 34 H30" stroke="#E8452F" strokeWidth="1.6" strokeLinecap="round" />
        {/* mat rotor principal */}
        <path d="M29 25 V20" stroke="#1D5A96" strokeWidth="2" strokeLinecap="round" />
        {/* pale rotative */}
        <g style={{ transformOrigin: "29px 20px" }} className="origin-[29px_20px] animate-rotor-spin">
          <path d="M11 20 H47" stroke="#0F2D52" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M29 6 V34" stroke="#0F2D52" strokeWidth="2.2" strokeLinecap="round" opacity="0" />
        </g>
        <circle cx="29" cy="20" r="1.6" fill="#0F2D52" />
      </svg>
    </div>
  );
}
