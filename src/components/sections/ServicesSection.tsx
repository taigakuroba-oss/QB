import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { FadeInWrapper } from "@/components/ui/FadeInWrapper";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading en="Services" ja="サービス・メニュー" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FadeInWrapper key={service.id} delay={i * 100}>
              <ServiceCard service={service} />
            </FadeInWrapper>
          ))}
        </div>

        {/* Note */}
        <FadeInWrapper className="mt-10 text-center" delay={300}>
          <p className="font-sans text-xs text-warm-gray">
            ご不明な点は、LINEよりお気軽にご相談ください。
          </p>
        </FadeInWrapper>
      </div>
    </section>
  );
}
