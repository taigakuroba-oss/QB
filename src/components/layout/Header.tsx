"use client";
import { useState, useEffect } from "react";
import { Monogram } from "@/components/ui/Monogram";

const navLinks = [
  { label: "Concept", href: "#concept" },
  { label: "About", href: "#profile" },
  { label: "Services", href: "#services" },
  { label: "Voice", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-warm-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 text-charcoal hover:text-rose-deep transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep rounded-md px-1"
          aria-label="うたかの — トップへ"
        >
          <Monogram size={26} className="text-rose-deep group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-mincho text-xl font-semibold tracking-widest">
            うたかの
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-cormorant italic text-base text-charcoal hover:text-rose-deep transition-colors relative after:absolute after:left-0 after:bottom-[-4px] after:h-px after:w-0 after:bg-rose-deep after:transition-all hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep rounded-md"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-warm-white/95 backdrop-blur-md border-t border-mauve-light/30 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="font-mincho text-lg text-charcoal hover:text-rose-deep transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep rounded-md"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
