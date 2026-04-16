type Props = {
  en: string;
  ja: string;
  className?: string;
};

export function SectionHeading({ en, ja, className = "" }: Props) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <p className="font-cormorant italic text-mauve-mid text-lg tracking-widest mb-1">
        {en}
      </p>
      <h2 className="font-mincho text-3xl md:text-4xl text-charcoal font-semibold tracking-wide">
        {ja}
      </h2>
      <div className="mt-4 mx-auto w-16 h-px bg-rose-blush" />
    </div>
  );
}
