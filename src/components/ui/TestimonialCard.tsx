import { type Testimonial } from "@/data/testimonials";

type Props = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="bg-warm-white rounded-2xl shadow-sm border border-mauve-light/40 p-6 flex flex-col gap-4">
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

      {/* Quote */}
      <p className="font-sans text-sm text-charcoal leading-loose relative before:content-['\u201c'] before:font-cormorant before:text-4xl before:text-rose-blush before:leading-none before:mr-1 after:content-['\u201d'] after:font-cormorant after:text-4xl after:text-rose-blush after:leading-none after:ml-1">
        {testimonial.text}
      </p>

      {/* Client */}
      <p className="font-sans text-xs text-warm-gray text-right">
        — {testimonial.client}
      </p>
    </div>
  );
}
