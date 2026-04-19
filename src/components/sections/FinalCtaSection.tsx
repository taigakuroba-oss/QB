import { LineButton } from "@/components/ui/LineButton";
import { FadeInWrapper } from "@/components/ui/FadeInWrapper";
import { BlobBackground } from "@/components/ui/BlobBackground";

export function FinalCtaSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-rose-blush/30 via-cream to-mauve-light/30 overflow-hidden">
      <BlobBackground variant="rose" position="top-left" size="md" className="opacity-30" />
      <BlobBackground variant="mauve" position="bottom-right" size="md" className="opacity-30" />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <FadeInWrapper>
          <p className="font-cormorant italic text-mauve-mid text-base tracking-widest mb-3">
            Let&apos;s start your journey
          </p>
          <h2 className="font-mincho text-3xl md:text-4xl text-charcoal font-semibold leading-snug mb-6">
            「なりたい自分」への
            <br />
            最初の一歩を、今日から。
          </h2>
          <p className="font-sans text-sm md:text-base text-charcoal/70 leading-loose mb-10 max-w-md mx-auto">
            まずは公式LINEで気軽にメッセージを。
            <br />
            あなたのペースに寄り添いながらサポートします。
          </p>
          <LineButton label="LINEで無料相談する" className="text-base px-10 py-5" />
        </FadeInWrapper>
      </div>
    </section>
  );
}
