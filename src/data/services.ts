import { ONLINE_SALON_URL, SINGLE_SESSION_URL, UDEMY_URL } from "@/lib/constants";

export type Service = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  duration?: string;
  price?: string;
  note?: string;
  badge?: string;
  ctaLabel: string;
  ctaUrl: string;
  ctaNote?: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: "single-session",
    title: "単発セッション",
    subtitle: "継続セッション優先のため 毎月5名まで",
    description:
      "お悩み相談をしたい、うたかののセッションを体験してみたい。という方は、まずこちらからお申し込みください♪ お悩みに合わせて、お話しさせていただきます。",
    duration: "75分",
    price: "¥15,400",
    note: "※お申し込みは公式LINEに「単発セッション希望」と送ってください。",
    badge: "毎月5名限定",
    ctaLabel: "単発セッションに申込む",
    ctaUrl: SINGLE_SESSION_URL,
    icon: "💬",
  },
  {
    id: "online-salon",
    title: "オンラインサロン",
    description:
      "セルフコーチングを身につけて、自分の力で夢を叶えていきたい方のためのサロンです。毎月テーマに沿ったコンテンツと、仲間と一緒に歩む安心感をお届けします。",
    ctaLabel: "サロンの詳細を見る",
    ctaUrl: ONLINE_SALON_URL,
    icon: "🌸",
  },
  {
    id: "udemy",
    title: "Udemy講座",
    description:
      "セルフコーチングの基礎を動画でしっかり学べる講座です。自分のペースで、好きな時間に取り組めます。クーポンコードでお得に受講できます。",
    badge: "クーポンあり",
    ctaLabel: "講座を見てみる",
    ctaUrl: UDEMY_URL,
    icon: "📚",
  },
];
