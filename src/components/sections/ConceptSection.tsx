import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInWrapper } from "@/components/ui/FadeInWrapper";
import { BlobBackground } from "@/components/ui/BlobBackground";

const concepts = [
  {
    en: "Lightly",
    ja: "軽やかに",
    desc: "「頑張らなければ」を手放して、自分のペースで前に進む。無理のない歩み方を一緒に探していきます。",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-8 h-8" aria-hidden="true">
        <path d="M14 30c4-10 16-10 20 0" strokeLinecap="round" />
        <circle cx="14" cy="30" r="2" fill="currentColor" />
        <circle cx="34" cy="30" r="2" fill="currentColor" />
        <path d="M24 14v8" strokeLinecap="round" />
        <circle cx="24" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    en: "Honestly",
    ja: "自分らしく",
    desc: "他人と比べず、自分の内なる声に耳を傾ける。本当に望んでいることを言語化していきます。",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-8 h-8" aria-hidden="true">
        <circle cx="24" cy="24" r="14" />
        <path d="M24 14v10l7 4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    en: "Surely",
    ja: "確実に",
    desc: "小さな気づきを積み重ねて、なりたい自分へと近づく。一歩ずつ、でも確かに変化していきます。",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-8 h-8" aria-hidden="true">
        <path d="M10 36 L20 26 L28 32 L38 18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 18 H38 V26" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function ConceptSection() {
  return (
    <section id="concept" className="relative py-24 bg-warm-white overflow-hidden">
      <BlobBackground variant="gold" position="top-right" size="md" className="opacity-25" />
      <BlobBackground variant="rose" position="bottom-left" size="sm" className="opacity-30" />

      <div className="relative max-w-5xl mx-auto px-6">
        <SectionHeading en="Concept" ja="大切にしていること" />

        <FadeInWrapper className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-mincho text-lg md:text-xl text-charcoal leading-loose">
            「サラッと軽やかに叶える」
            <br />
            それは、自分を信じて
            <br className="md:hidden" />
            一歩ずつ進むこと。
          </p>
        </FadeInWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {concepts.map((c, i) => (
            <FadeInWrapper key={c.en} delay={i * 120}>
              <div className="text-center px-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-blush/20 text-rose-deep mb-5">
                  {c.icon}
                </div>
                <p className="font-cormorant italic text-mauve-mid text-sm tracking-widest mb-1">
                  {c.en}
                </p>
                <h3 className="font-mincho text-xl font-semibold text-charcoal mb-3">
                  {c.ja}
                </h3>
                <p className="font-sans text-sm text-warm-gray leading-loose">
                  {c.desc}
                </p>
              </div>
            </FadeInWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
