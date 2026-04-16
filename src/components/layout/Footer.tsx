import { INSTAGRAM_URL, LINE_OFFICIAL_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white/70 py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-6">
        {/* Brand */}
        <p className="font-mincho text-xl text-warm-white tracking-widest">
          うたかの
        </p>
        <p className="font-cormorant italic text-mauve-light text-sm tracking-wide">
          セルフコーチングでサラッと軽やかに叶える
        </p>

        {/* Social links */}
        <div className="flex items-center gap-6">
          <a
            href={LINE_OFFICIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-white/60 hover:text-line-green transition-colors text-sm font-sans"
          >
            LINE
          </a>
          <span className="text-warm-white/20">|</span>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-white/60 hover:text-rose-blush transition-colors text-sm font-sans"
          >
            Instagram
          </a>
        </div>

        {/* Nav */}
        <nav className="flex flex-wrap justify-center gap-6 text-xs font-sans">
          {[
            { label: "About", href: "#profile" },
            { label: "Services", href: "#services" },
            { label: "Voice", href: "#testimonials" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-warm-white/90 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="w-16 h-px bg-warm-white/20" />
        <p className="text-xs font-sans">
          &copy; {new Date().getFullYear()} うたかの. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
