import Image from "next/image";
import { PROFILE_IMAGE_URL } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInWrapper } from "@/components/ui/FadeInWrapper";
import { profileBio, qualifications } from "@/data/profile";

export function ProfileSection() {
  return (
    <section id="profile" className="py-24 bg-warm-white">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading en="About" ja="プロフィール" />

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
          {/* Photo */}
          <FadeInWrapper className="flex-shrink-0 flex flex-col items-center gap-4">
            <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-rose-blush/40 shadow-lg">
              <Image
                src={PROFILE_IMAGE_URL}
                alt="うたかの プロフィール写真"
                width={224}
                height={224}
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="text-center">
              <p className="font-mincho text-xl text-charcoal font-semibold">うたかの</p>
              <p className="font-sans text-sm text-warm-gray mt-1">@utakano.emma</p>
            </div>
          </FadeInWrapper>

          {/* Text */}
          <FadeInWrapper className="flex-1" delay={150}>
            <div className="space-y-5">
              {profileBio.trim().split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className={`font-sans leading-loose ${
                    i === 0
                      ? "font-mincho text-xl text-charcoal font-semibold"
                      : "text-sm text-charcoal/80"
                  }`}
                >
                  {para.trim()}
                </p>
              ))}
            </div>

            {/* Qualifications */}
            <div className="mt-8 pt-6 border-t border-mauve-light/40">
              <p className="font-cormorant italic text-mauve-mid text-sm tracking-wider mb-3">
                Qualifications
              </p>
              <ul className="space-y-2">
                {qualifications.map((q, i) => (
                  <li key={i} className="flex items-center gap-2 font-sans text-sm text-charcoal/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-blush flex-shrink-0" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInWrapper>
        </div>
      </div>
    </section>
  );
}
