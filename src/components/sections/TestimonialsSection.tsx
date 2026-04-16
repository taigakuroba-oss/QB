import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { FadeInWrapper } from "@/components/ui/FadeInWrapper";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-warm-white">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading en="Voice" ja="お客様の声" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <FadeInWrapper key={t.id} delay={i * 100}>
              <TestimonialCard testimonial={t} />
            </FadeInWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
