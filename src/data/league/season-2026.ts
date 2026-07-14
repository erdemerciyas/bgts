/** BGTS League — Season 2026 config (Phase 1, no DB) */

export type LeaguePrize = {
  rank: number;
  label: string;
  detail?: string;
  hook?: string;
  image: string;
};

export type LeagueQuestion = {
  id: string;
  weekIndex: number;
  weekTotal: number;
  monthLabel: string;
  department: "İK" | "TEKNİK" | "SATIŞ";
  prompt: string;
  hintLabel: string;
  /** Internal path for localizedHref (e.g. /about) */
  hintHref: string;
  opensAt: string;
  closesAt: string;
  revealAt: string;
  /** Server-only; never ship to client before revealAt */
  correctAnswer: number | null;
  explanation: string;
};

export type SeasonConfig = {
  id: string;
  label: string;
  monthLeg: string;
  titles: {
    main: string;
    sub: string;
  };
  announcement: {
    greeting: string;
    body: string[];
    goals: string[];
    closing: string;
    signOff: string;
  };
  prizes: LeaguePrize[];
  monthlyBonusNote: string;
  scoring: {
    participation: number;
    exact: number;
    nearPct: number;
    nearPts: number;
    closePct: number;
    closePts: number;
  };
  atmosphereLeaderboard: { name: string; seasonPts: number; monthPts: number }[];
  questions: LeagueQuestion[];
};

export const SEASON_2026: SeasonConfig = {
  id: "2026",
  label: "Sezon 2026",
  monthLeg: "Temmuz Ayağı",
  titles: {
    main: "Şirketi En İyi Kim Tanıyor?",
    sub: "Söz Sende: Ne Kadar Biliyorsun?",
  },
  announcement: {
    greeting: "Merhabalar,",
    body: [
      "Şirketimizi daha yakından tanımak, kurum kültürümüzü güçlendirmek ve hep birlikte ortak bilgi seviyemizi artırmak amacıyla yeni bir uygulamayı hayata geçiriyoruz.",
      "Bu kapsamda, her hafta şirket web sitemizde şirketimiz, süreçlerimiz, uygulamalarımız ve kurum kültürümüze ilişkin kısa bilgi soruları paylaşılacaktır. Sorulara doğru ve düzenli katılım sağlayan çalışanlarımız arasından her ay en başarılı katılımcılar belirlenecek, yıl sonunda ise yıl boyunca gösterdikleri performansla öne çıkan çalışanlarımız özel ödüllerle buluşacaktır.",
    ],
    goals: [
      "Şirketimize ilişkin bilgi paylaşımını artırmayı",
      "Kurumsal uygulamalar konusunda farkındalığı güçlendirmeyi",
      "Öğrenmeyi eğlenceli ve etkileşimli hale getirmeyi",
      "Çalışanlarımız arasında katılımı ve etkileşimi desteklemeyi",
    ],
    closing:
      "İlk sorularımızı bu hafta web sitemizde yayınlıyor olacağız. Takipte kalmayı ve yarışmaya katılmayı unutmayın! Şimdiden tüm katılımcılarımıza başarılar dileriz.",
    signOff: "Sevgilerimizle,\nİnsan Kaynakları",
  },
  prizes: [
    {
      rank: 1,
      label: "Apple AirPods Pro",
      hook: "Şampiyonun ödülü",
      detail: "Aktif gürültü engelleme · sezon birincisi",
      image: "/images/league/prize-airpods.png",
    },
    {
      rank: 2,
      label: "Apple Watch SE veya JBL Live Pro",
      hook: "Gümüş madalya",
      detail: "İkisinden birini seç",
      image: "/images/league/prize-watch.png",
    },
    {
      rank: 3,
      label: "Amazon Kindle",
      hook: "Bronz madalya",
      detail: "Okuma keyfi seninle",
      image: "/images/league/prize-kindle.png",
    },
  ],
  monthlyBonusNote: "Her ay en yüksek puanı alan oyuncuya sürpriz mini ödül",
  scoring: {
    participation: 10,
    exact: 100,
    nearPct: 5,
    nearPts: 80,
    closePct: 15,
    closePts: 50,
  },
  atmosphereLeaderboard: [
    { name: "Ali K.", seasonPts: 580, monthPts: 96 },
    { name: "Ayşe D.", seasonPts: 560, monthPts: 92 },
    { name: "Mert Y.", seasonPts: 540, monthPts: 88 },
    { name: "Zeynep A.", seasonPts: 520, monthPts: 84 },
    { name: "Can B.", seasonPts: 500, monthPts: 80 },
    { name: "Elif T.", seasonPts: 490, monthPts: 76 },
    { name: "Burak S.", seasonPts: 470, monthPts: 72 },
    { name: "Deniz M.", seasonPts: 450, monthPts: 68 },
    { name: "Selin R.", seasonPts: 430, monthPts: 64 },
  ],
  questions: [
    {
      id: "2026-07-w1",
      weekIndex: 1,
      weekTotal: 3,
      monthLabel: "Temmuz",
      department: "İK",
      prompt: "Şirkette kaç mühendis çalışmaktadır?",
      hintLabel: "Hakkımızda sayfasında ipucu ara",
      hintHref: "/about",
      opensAt: "2026-07-13T09:00:00+03:00",
      closesAt: "2026-07-19T23:59:59+03:00",
      revealAt: "2026-07-20T09:00:00+03:00",
      correctAnswer: 1396,
      explanation:
        "BGTS ailesinde yaklaşık 1.400+ mühendis görev alıyor. Doğru rakam bu haftanın resmi İK verisine göre 1.396.",
    },
    {
      id: "2026-07-w2",
      weekIndex: 2,
      weekTotal: 3,
      monthLabel: "Temmuz",
      department: "TEKNİK",
      prompt: "Kaç farklı proje aktif olarak yürütülmektedir?",
      hintLabel: "Başarı hikâyeleri ve hizmetler sayfalarına göz at",
      hintHref: "/resources/success-stories",
      opensAt: "2026-07-20T09:00:00+03:00",
      closesAt: "2026-07-26T23:59:59+03:00",
      revealAt: "2026-07-27T09:00:00+03:00",
      correctAnswer: null,
      explanation: "Doğru cevap netleştiğinde burada açıklama yayınlanacak.",
    },
    {
      id: "2026-07-w3",
      weekIndex: 3,
      weekTotal: 3,
      monthLabel: "Temmuz",
      department: "SATIŞ",
      prompt: "H1 müşteri ile yapılan toplantı sayısı kaçtır?",
      hintLabel: "İletişim ve kurumsal sayfalarda dolaş",
      hintHref: "/contact",
      opensAt: "2026-07-27T09:00:00+03:00",
      closesAt: "2026-08-02T23:59:59+03:00",
      revealAt: "2026-08-03T09:00:00+03:00",
      correctAnswer: null,
      explanation: "Doğru cevap netleştiğinde burada açıklama yayınlanacak.",
    },
  ],
};

/** Public shape — no correctAnswer / explanation until reveal */
export type PublicQuestion = Omit<LeagueQuestion, "correctAnswer" | "explanation"> & {
  status: "upcoming" | "open" | "closed" | "revealed";
  hasAnswerConfigured: boolean;
};

export function getQuestionStatus(
  q: LeagueQuestion,
  now: Date = new Date()
): PublicQuestion["status"] {
  const t = now.getTime();
  if (t < new Date(q.opensAt).getTime()) return "upcoming";
  if (t < new Date(q.closesAt).getTime()) return "open";
  if (t < new Date(q.revealAt).getTime()) return "closed";
  return "revealed";
}

export function toPublicQuestion(q: LeagueQuestion, now: Date = new Date()): PublicQuestion {
  const { correctAnswer: _a, explanation: _e, ...rest } = q;
  return {
    ...rest,
    status: getQuestionStatus(q, now),
    hasAnswerConfigured: q.correctAnswer != null,
  };
}

export function getActiveQuestion(now: Date = new Date()): LeagueQuestion | null {
  const open = SEASON_2026.questions.find((q) => getQuestionStatus(q, now) === "open");
  if (open) return open;
  const closed = [...SEASON_2026.questions]
    .reverse()
    .find((q) => {
      const s = getQuestionStatus(q, now);
      return s === "closed" || s === "revealed";
    });
  return closed ?? SEASON_2026.questions[0] ?? null;
}

export function getQuestionById(id: string): LeagueQuestion | undefined {
  return SEASON_2026.questions.find((q) => q.id === id);
}

export function getNextQuestionOpensAt(now: Date = new Date()): string | null {
  const upcoming = SEASON_2026.questions.find((q) => getQuestionStatus(q, now) === "upcoming");
  return upcoming?.opensAt ?? null;
}
