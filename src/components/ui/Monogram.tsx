type Props = {
  className?: string;
  size?: number;
};

export function Monogram({ className = "", size = 28 }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="monogramGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8C4C4" />
          <stop offset="100%" stopColor="#B09AB0" />
        </linearGradient>
      </defs>
      <circle
        cx="32"
        cy="32"
        r="29"
        fill="none"
        stroke="url(#monogramGrad)"
        strokeWidth="1.5"
      />
      <path
        d="M22 24 v14 c0 4.5 3.5 8 8 8 c4.5 0 8-3.5 8-8 v-14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M38 38 v8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="46" cy="20" r="1.6" fill="#C9A96E" />
    </svg>
  );
}
