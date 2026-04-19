import { INSTAGRAM_URL, LINE_OFFICIAL_URL } from "@/lib/constants";
import { Monogram } from "@/components/ui/Monogram";

export function Footer() {
  return (
    <footer className="relative bg-charcoal text-warm-white/70 py-16 overflow-hidden">
      {/* Subtle decorative line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-blush/40 to-transparent"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-6 flex flex-col items-center gap-6">
        {/* Brand mark */}
        <Monogram size={40} className="text-rose-blush" />

        <div className="text-center space-y-2">
          <p className="font-mincho text-xl text-warm-white tracking-widest">
            うたかの
          </p>
          <p className="font-cormorant italic text-mauve-light text-sm tracking-wide">
            セルフコーチングでサラッと軽やかに叶える
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6 mt-2">
          <a
            href={LINE_OFFICIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-white/60 hover:text-line-green transition-colors text-sm font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line-green rounded-md px-1"
          >
            LINE
          </a>
          <span className="text-warm-white/20" aria-hidden="true">|</span>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-white/60 hover:text-rose-blush transition-colors text-sm font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-blush rounded-md px-1"
          >
            Instagram
          </a>
        </div>

        {/* Nav */}
        <nav
          aria-label="フッターナビゲーション"
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-sans mt-2"
        >
          {[
            { label: "Concept", href: "#concept" },
            { label: "About", href: "#profile" },
            { label: "Services", href: "#services" },
            { label: "Voice", href: "#testimonials" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-warm-white/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-blush rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="w-16 h-px bg-warm-white/20 mt-2" />
        <p className="text-xs font-sans">
          &copy; {new Date().getFullYear()} うたかの. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
