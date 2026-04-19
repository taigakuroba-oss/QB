import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInWrapper } from "@/components/ui/FadeInWrapper";
import { LineButton } from "@/components/ui/LineButton";

const steps = [
  {
    no: "01",
    title: "公式LINEに登録",
    desc: "まずは公式LINEを友だち追加。最新情報や限定コンテンツをお届けします。",
  },
  {
    no: "02",
    title: "気になるサービスを選ぶ",
    desc: "単発セッション・サロン・Udemy講座から、あなたに合ったものを選んでいただけます。迷ったらLINEでご相談を。",
  },
  {
    no: "03",
    title: "一歩を踏み出す",
    desc: "あなたのペースで、なりたい自分への道のりを歩みはじめましょう。寄り添いながらサポートします。",
  },
];

export function FlowSection() {
  return (
    <section id="flow" className="py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading en="Flow" ja="始め方" />

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {/* Connecting line on desktop */}
          <div
            className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-mauve-light/60"
            aria-hidden="true"
          />

          {steps.map((s, i) => (
            <FadeInWrapper key={s.no} delay={i * 150}>
              <div className="relative text-center bg-warm-white rounded-2xl p-8 shadow-sm border border-mauve-light/30 h-full">
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-rose-blush to-mauve-light text-white shadow-md mb-5 -mt-16 mx-auto">
                  <span className="font-cormorant italic text-2xl">{s.no}</span>
                </div>
                <h3 className="font-mincho text-lg font-semibold text-charcoal mb-3">
                  {s.title}
                </h3>
                <p className="font-sans text-sm text-warm-gray leading-loose">
                  {s.desc}
                </p>
              </div>
            </FadeInWrapper>
          ))}
        </div>

        <FadeInWrapper className="mt-12 text-center" delay={500}>
          <LineButton label="まずはLINE登録から" />
        </FadeInWrapper>
      </div>
    </section>
  );
}
