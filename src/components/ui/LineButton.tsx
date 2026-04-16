import { LINE_OFFICIAL_URL } from "@/lib/constants";

type Props = {
  label?: string;
  className?: string;
};

export function LineButton({ label = "LINEで無料相談する", className = "" }: Props) {
  return (
    <a
      href={LINE_OFFICIAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 bg-line-green text-white font-sans font-medium px-8 py-4 rounded-full shadow-md hover:brightness-90 active:scale-95 transition-all duration-200 ${className}`}
    >
      <svg
        viewBox="0 0 48 48"
        fill="currentColor"
        className="w-6 h-6 flex-shrink-0"
        aria-hidden="true"
      >
        <path d="M24 4C12.95 4 4 11.82 4 21.5c0 5.72 3.18 10.8 8.14 14.04-.36 1.33-1.3 4.84-1.49 5.6-.23.93.34 .92.71.67.29-.19 4.64-3.14 6.52-4.4.97.14 1.97.22 2.98.22 11.05 0 20-7.82 20-17.5S35.05 4 24 4z" />
      </svg>
      {label}
    </a>
  );
}
