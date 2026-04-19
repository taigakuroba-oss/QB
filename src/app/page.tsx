import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ConceptSection } from "@/components/sections/ConceptSection";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FlowSection } from "@/components/sections/FlowSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import {
  INSTAGRAM_URL,
  LINE_OFFICIAL_URL,
  PROFILE_IMAGE_URL,
} from "@/lib/constants";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "うたかの",
  alternateName: "utakano.emma",
  description: "セルフコーチングでサラッと軽やかに叶える",
  image: PROFILE_IMAGE_URL,
  jobTitle: "セルフコーチング・コーチ",
  url: "https://utakano.com",
  sameAs: [INSTAGRAM_URL, LINE_OFFICIAL_URL],
};

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-charcoal focus:text-warm-white focus:px-4 focus:py-2 focus:rounded-md focus:font-sans focus:text-sm"
      >
        メインコンテンツへスキップ
      </a>
      <Header />
      <main id="main">
        <HeroSection />
        <ConceptSection />
        <ProfileSection />
        <ServicesSection />
        <FlowSection />
        <TestimonialsSection />
        <ContactSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  );
}
