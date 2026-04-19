import { type Service } from "@/data/services";

type Props = {
  service: Service;
};

export function ServiceCard({ service }: Props) {
  const featured = service.featured;

  return (
    <div
      className={`relative bg-warm-white rounded-2xl p-6 md:p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        featured
          ? "shadow-lg ring-2 ring-rose-blush border-0 md:scale-[1.02]"
          : "shadow-sm border border-mauve-light/40 hover:shadow-md"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-deep to-mauve-mid text-white font-sans text-xs font-medium tracking-widest px-4 py-1 rounded-full shadow-md">
          OSUSUME
        </span>
      )}

      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <span
            className={`flex items-center justify-center w-12 h-12 text-2xl rounded-2xl ${
              featured ? "bg-rose-blush/30" : "bg-cream"
            }`}
            aria-hidden="true"
          >
            {service.icon}
          </span>
          <h3 className="font-mincho text-xl font-semibold text-charcoal">
            {service.title}
          </h3>
        </div>
        {service.badge && (
          <span className="flex-shrink-0 text-xs font-sans font-medium bg-gold-accent/15 text-gold-accent px-2.5 py-1 rounded-full border border-gold-accent/30">
            {service.badge}
          </span>
        )}
      </div>

      {service.subtitle && (
        <p className="text-sm font-sans text-rose-deep font-medium flex items-start gap-1.5">
          <span aria-hidden="true">✦</span>
          <span>{service.subtitle}</span>
        </p>
      )}

      <p className="font-sans text-sm text-warm-gray leading-loose flex-1">
        {service.description}
      </p>

      {(service.price || service.duration) && (
        <div className="flex items-baseline gap-3 pt-3 border-t border-mauve-light/30">
          {service.duration && (
            <span className="font-sans text-xs text-warm-gray bg-cream px-2.5 py-1 rounded-full">
              {service.duration}
            </span>
          )}
          {service.price && (
            <span className="font-mincho text-2xl font-semibold text-gold-accent">
              {service.price}
            </span>
          )}
        </div>
      )}

      {service.note && (
        <p className="text-xs font-sans text-warm-gray leading-relaxed">
          {service.note}
        </p>
      )}

      <a
        href={service.ctaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto inline-flex items-center justify-center gap-2 font-sans font-medium text-sm px-6 py-3.5 rounded-full transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
          featured
            ? "bg-gradient-to-r from-rose-deep to-mauve-mid text-white shadow-md hover:shadow-lg focus-visible:ring-rose-deep"
            : "bg-mauve-mid hover:bg-mauve-mid/85 text-white focus-visible:ring-mauve-mid"
        }`}
      >
        {service.ctaLabel}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-4 h-4"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
    </div>
  );
}
