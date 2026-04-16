import { type Service } from "@/data/services";

type Props = {
  service: Service;
};

export function ServiceCard({ service }: Props) {
  return (
    <div className="bg-warm-white rounded-2xl shadow-sm border border-mauve-light/40 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="text-3xl" aria-hidden="true">{service.icon}</span>
          <h3 className="font-mincho text-xl font-semibold text-charcoal">
            {service.title}
          </h3>
        </div>
        {service.badge && (
          <span className="flex-shrink-0 text-xs font-sans font-medium bg-rose-blush/30 text-rose-deep px-2.5 py-1 rounded-full border border-rose-blush/50">
            {service.badge}
          </span>
        )}
      </div>

      {/* Subtitle / limit */}
      {service.subtitle && (
        <p className="text-sm font-sans text-rose-deep font-medium">
          ✦ {service.subtitle}
        </p>
      )}

      {/* Description */}
      <p className="font-sans text-sm text-warm-gray leading-relaxed flex-1">
        {service.description}
      </p>

      {/* Price & duration */}
      {(service.price || service.duration) && (
        <div className="flex items-baseline gap-4 pt-2 border-t border-mauve-light/30">
          {service.duration && (
            <span className="font-sans text-sm text-charcoal">{service.duration}</span>
          )}
          {service.price && (
            <span className="font-mincho text-2xl font-semibold text-gold-accent">
              {service.price}
            </span>
          )}
        </div>
      )}

      {/* Note */}
      {service.note && (
        <p className="text-xs font-sans text-warm-gray leading-relaxed">
          {service.note}
        </p>
      )}

      {/* CTA */}
      <a
        href={service.ctaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex items-center justify-center gap-2 bg-mauve-mid hover:bg-mauve-mid/80 text-white font-sans font-medium text-sm px-6 py-3 rounded-full transition-all duration-200 active:scale-95"
      >
        {service.ctaLabel}
        <span aria-hidden="true">▶</span>
      </a>
    </div>
  );
}
