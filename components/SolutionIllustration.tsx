type IllustrationType = "sih" | "ris" | "pacs" | "equipement";

const STROKE = "#1D5A96"; // rimed
const STROKE_LIGHT = "#3E7FBF"; // rimedLight
const ACCENT = "#E8452F"; // signal
const FAINT = "#DCE6EE"; // line

function SIH() {
  return (
    <>
      {/* dossier central */}
      <rect x="34" y="30" width="28" height="34" rx="3" fill="none" stroke={STROKE} strokeWidth="2.5" />
      <path d="M40 41 H56 M40 48 H56 M40 55 H50" stroke={STROKE_LIGHT} strokeWidth="2" strokeLinecap="round" />
      {/* liaisons vers les services */}
      <path d="M34 40 L14 24 M62 40 L82 24 M34 54 L14 70 M62 54 L82 70" stroke={FAINT} strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="22" r="5" fill="none" stroke={STROKE} strokeWidth="2.5" />
      <circle cx="84" cy="22" r="5" fill="none" stroke={STROKE} strokeWidth="2.5" />
      <circle cx="12" cy="72" r="5" fill="none" stroke={STROKE} strokeWidth="2.5" />
      <circle cx="84" cy="72" r="5" fill="none" stroke={STROKE} strokeWidth="2.5" />
      <circle cx="48" cy="24" r="2.5" fill={ACCENT} className="animate-blink" />
    </>
  );
}

function RIS() {
  return (
    <>
      {/* ecran de lecture */}
      <rect x="18" y="20" width="60" height="44" rx="3" fill="none" stroke={STROKE} strokeWidth="2.5" />
      <path d="M18 58 H78" stroke={STROKE} strokeWidth="2.5" />
      <path d="M38 64 L34 76 M58 64 L62 76 M32 76 H64" stroke={STROKE_LIGHT} strokeWidth="2" strokeLinecap="round" />
      {/* silhouette pulmonaire stylisee */}
      <path
        d="M48 28 V34 M48 34 C40 34 36 40 37 48 C38 55 42 50 44 45 C45 43 46 44 46 47 V54 M48 34 C56 34 60 40 59 48 C58 55 54 50 52 45 C51 43 50 44 50 47 V54"
        fill="none"
        stroke={STROKE_LIGHT}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="70" cy="28" r="2.5" fill={ACCENT} className="animate-blink" />
    </>
  );
}

function PACS() {
  return (
    <>
      {/* pile d'images archivees */}
      <rect x="16" y="42" width="34" height="24" rx="2.5" fill="none" stroke={FAINT} strokeWidth="2" />
      <rect x="20" y="36" width="34" height="24" rx="2.5" fill="none" stroke={STROKE_LIGHT} strokeWidth="2" />
      <rect x="24" y="30" width="34" height="24" rx="2.5" fill="none" stroke={STROKE} strokeWidth="2.5" />
      <path d="M32 40 L40 46 L47 38" stroke={STROKE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* diffusion vers un poste distant */}
      <path d="M62 42 H74" stroke={STROKE} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 6" />
      <rect x="74" y="30" width="16" height="22" rx="2.5" fill="none" stroke={STROKE} strokeWidth="2.5" />
      <path d="M78 58 H86" stroke={STROKE_LIGHT} strokeWidth="2" strokeLinecap="round" />
      <circle cx="82" cy="24" r="2.5" fill={ACCENT} className="animate-blink" />
    </>
  );
}

function Equipement() {
  return (
    <>
      {/* moniteur avec courbe vitale */}
      <rect x="16" y="24" width="52" height="38" rx="3" fill="none" stroke={STROKE} strokeWidth="2.5" />
      <path
        d="M22 46 H32 L36 34 L42 56 L47 40 L51 46 H62"
        fill="none"
        stroke={STROKE_LIGHT}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M32 62 V70 M52 62 V70 M28 70 H56" stroke={FAINT} strokeWidth="2" strokeLinecap="round" />
      {/* cle de maintenance */}
      <path
        d="M70 58 L82 70 M79 55 C83 51 89 51 92 55 C95 59 95 65 91 68 C87 72 81 72 78 68 L64 82"
        fill="none"
        stroke={STROKE}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="36" cy="30" r="2.5" fill={ACCENT} className="animate-blink" />
    </>
  );
}

export default function SolutionIllustration({
  type,
  className = "",
}: {
  type: IllustrationType;
  className?: string;
}) {
  const content =
    type === "sih" ? <SIH /> : type === "ris" ? <RIS /> : type === "pacs" ? <PACS /> : <Equipement />;

  return (
    <div
      className={`flex aspect-square items-center justify-center rounded-lg border border-line bg-bg ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 96 96" className="h-4/5 w-4/5">
        {content}
      </svg>
    </div>
  );
}
