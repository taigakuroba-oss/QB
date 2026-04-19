type Props = {
  variant?: "rose" | "mauve" | "gold";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const variantColors: Record<NonNullable<Props["variant"]>, string> = {
  rose: "#E8C4C4",
  mauve: "#D4C4D4",
  gold: "#E5D4B0",
};

const positionClasses: Record<NonNullable<Props["position"]>, string> = {
  "top-left": "-top-20 -left-20",
  "top-right": "-top-20 -right-20",
  "bottom-left": "-bottom-20 -left-20",
  "bottom-right": "-bottom-20 -right-20",
};

const sizeClasses: Record<NonNullable<Props["size"]>, string> = {
  sm: "w-48 h-48",
  md: "w-72 h-72",
  lg: "w-[28rem] h-[28rem]",
};

export function BlobBackground({
  variant = "rose",
  position = "top-right",
  size = "md",
  className = "",
}: Props) {
  return (
    <div
      className={`pointer-events-none absolute ${positionClasses[position]} ${sizeClasses[size]} opacity-40 blur-3xl ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <path
          fill={variantColors[variant]}
          d="M48,-58.6C61.6,-48.4,71.4,-32.4,74.4,-15.4C77.4,1.6,73.7,19.6,64.1,33.5C54.5,47.5,38.9,57.5,21.6,63.7C4.3,69.9,-14.7,72.3,-30.7,66.3C-46.7,60.3,-59.7,45.9,-66.3,29.4C-72.9,12.9,-73.1,-5.7,-66.6,-21.1C-60.1,-36.5,-47,-48.7,-32.6,-57.9C-18.2,-67.1,-2.5,-73.3,11.8,-71.5C26.1,-69.7,34.4,-68.8,48,-58.6Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
}
