import { type Testimonial } from "@/data/testimonials";

type Props = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="relative bg-warm-white rounded-2xl shadow-sm border border-mauve-light/40 p-7 md:p-8 flex flex-col gap-5 transition-shadow duration-300 hover:shadow-md">
      {/* Decorative quote mark */}
      <span
        className="absolute top-4 right-5 font-cormorant text-6xl text-rose-blush/40 leading-none select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Stars */}
      <div className="flex gap-0.5" aria-label={`${testimonial.stars}点満点`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={i < testimonial.stars ? "text-gold-accent" : "text-mauve-light"}
            aria-hidden="true"
          >
            ★
          </span>
        ))}
      </div>

      {/* Quote text */}
      <p className="font-sans text-sm text-charcoal leading-loose flex-1 relative z-10">
        {testimonial.text}
      </p>

      {/* Client */}
      <div className="flex items-center gap-3 pt-3 border-t border-mauve-light/30">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-rose-blush to-mauve-light text-white font-cormorant italic text-lg shadow-sm">
          {testimonial.initial}
        </div>
        <p className="font-sans text-xs text-warm-gray">
          {testimonial.client}
        </p>
      </div>
    </div>
  );
}
