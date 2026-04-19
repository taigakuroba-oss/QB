import Image from "next/image";
import { PROFILE_IMAGE_URL } from "@/lib/constants";
import { LineButton } from "@/components/ui/LineButton";
import { BlobBackground } from "@/components/ui/BlobBackground";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen-dvh bg-gradient-to-b from-warm-white via-cream to-warm-white flex items-center pt-16 overflow-hidden"
    >
      {/* Decorative blobs */}
      <BlobBackground variant="rose" position="top-right" size="lg" />
      <BlobBackground variant="mauve" position="bottom-left" size="md" />

      {/* Subtle dot pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, #3D3535 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Text */}
          <div className="flex-1 text-center md:text-left animate-fade-in-up">
            <p className="font-cormorant italic text-mauve-mid text-base tracking-widest mb-4">
              Self-Coaching &amp; Life Design
            </p>

            <h1 className="font-mincho font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal leading-snug mb-6">
              セルフコーチングで
              <br />
              <span className="relative inline-block text-rose-deep">
                サラッと軽やかに
                <span
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-rose-blush/50 rounded-full"
                  aria-hidden="true"
                />
              </span>
              <br />
              叶える
            </h1>

            <p className="font-sans font-light text-warm-gray text-base md:text-lg leading-loose mb-10 max-w-md mx-auto md:mx-0">
              「なりたい自分」への道のりを、
              <br className="hidden md:block" />
              無理せず、自分らしく歩んでいきませんか？
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <LineButton label="まずは無料相談へ" />
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-mauve-mid text-charcoal font-sans font-medium px-8 py-4 rounded-full hover:bg-cream active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mauve-mid focus-visible:ring-offset-2"
              >
                サービスを見る
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative flex-shrink-0">
            {/* Decorative ring (now inside relative parent) */}
            <div
              className="absolute -z-0 w-64 h-80 md:w-80 md:h-[420px] rounded-3xl border border-rose-blush/50 -translate-x-3 -translate-y-3"
              aria-hidden="true"
            />
            {/* Decorative dot */}
            <div
              className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-gold-accent/20 z-0"
              aria-hidden="true"
            />
            <div className="relative w-56 h-72 md:w-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-mauve-light/40 z-10">
              <Image
                src={PROFILE_IMAGE_URL}
                alt="うたかの プロフィール写真"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 224px, 288px"
                priority
              />
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-16 md:mt-24">
          <a
            href="#concept"
            aria-label="スクロールして詳細へ"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mauve-mid rounded-full px-2"
          >
            <div className="flex flex-col items-center gap-2 text-warm-gray motion-safe:animate-bounce">
              <span className="font-cormorant italic text-xs tracking-widest">
                scroll
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
