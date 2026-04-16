"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function FadeInWrapper({ children, className = "", delay = 0 }: Props) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
