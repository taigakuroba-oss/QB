import { Ornament } from "@/components/ui/Ornament";

type Props = {
  en: string;
  ja: string;
  className?: string;
};

export function SectionHeading({ en, ja, className = "" }: Props) {
  return (
    <div className={`text-center mb-14 ${className}`}>
      <p className="font-cormorant italic text-mauve-mid text-lg tracking-[0.3em] mb-2">
        {en}
      </p>
      <h2 className="font-mincho text-3xl md:text-4xl text-charcoal font-semibold tracking-wide">
        {ja}
      </h2>
      <Ornament className="mt-5 mx-auto w-32 h-4 text-rose-blush" />
    </div>
  );
}
