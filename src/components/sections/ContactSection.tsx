"use client";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LineButton } from "@/components/ui/LineButton";
import { FadeInWrapper } from "@/components/ui/FadeInWrapper";
import { Divider } from "@/components/ui/Divider";

const faqs = [
  {
    q: "まずどこから始めればいいですか？",
    a: "まずは無料相談（公式LINEより）からお気軽にどうぞ。セッションかサロンか、ご状況に合わせてご提案します。",
  },
  {
    q: "セッションはオンラインですか？",
    a: "はい、ZoomまたはLINE通話にて完全オンラインで対応しています。全国どこからでもご参加いただけます。",
  },
  {
    q: "セルフコーチングは初めてですが大丈夫ですか？",
    a: "もちろんです。Udemy講座で基礎から学んでいただいてから単発セッションに進む方も多くいらっしゃいます。",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-mauve-light/40 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-sans text-sm font-medium text-charcoal">{q}</span>
        <span
          className={`flex-shrink-0 text-mauve-mid transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>
      {open && (
        <p className="font-sans text-sm text-warm-gray leading-relaxed pb-5 pr-8">
          {a}
        </p>
      )}
    </div>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading en="Contact" ja="お問い合わせ" />

        {/* Main CTA */}
        <FadeInWrapper className="flex flex-col items-center gap-6 text-center mb-16">
          <p className="font-sans text-sm text-warm-gray leading-loose max-w-md">
            ご質問・ご相談は公式LINEへお気軽にどうぞ。
            <br />
            通常1〜2営業日以内にご返信いたします。
          </p>
          <LineButton label="LINEで無料相談する" className="text-base px-10 py-5" />
          <p className="font-sans text-xs text-warm-gray">
            ※ LINEを友だち追加するだけでOKです。
          </p>
        </FadeInWrapper>

        <Divider className="mb-16" />

        {/* FAQ */}
        <FadeInWrapper>
          <h3 className="font-mincho text-xl text-charcoal font-semibold text-center mb-8">
            よくあるご質問
          </h3>
          <div className="bg-warm-white rounded-2xl shadow-sm border border-mauve-light/30 px-6 py-2">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </FadeInWrapper>
      </div>
    </section>
  );
}
