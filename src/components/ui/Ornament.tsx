type Props = {
  className?: string;
};

export function Ornament({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 120 16"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <line x1="0" y1="8" x2="44" y2="8" strokeLinecap="round" />
      <path
        d="M44 8 C 50 4, 54 4, 60 8 C 66 12, 70 12, 76 8"
        strokeLinecap="round"
      />
      <line x1="76" y1="8" x2="120" y2="8" strokeLinecap="round" />
      <circle cx="60" cy="8" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WaveDivider({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className={`block w-full ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
        fill="currentColor"
      />
    </svg>
  );
}
