import { Clock, Mail, ShieldCheck } from "lucide-react";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
import { localizedHref } from "@/lib/routes";
import { Container } from "@/components/ui/Container";
import ScholarshipWizard from "@/components/scholarship/ScholarshipWizard";

const HIGHLIGHT_ICONS = [Clock, ShieldCheck, Mail];

export default async function ScholarshipPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dict = (await getDictionary(lang as Locale)).scholarship;
    const d = dict.page;

    return (
        <div className="min-h-screen bg-slate-50">
            {/* HERO */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#002a57] via-[#0056A7] to-[#1a73c9] pb-32 pt-16 lg:pb-40 lg:pt-24">
                <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-white/10 blur-[110px]" />
                <div aria-hidden className="pointer-events-none absolute -bottom-32 left-[10%] h-[360px] w-[360px] rounded-full bg-cyan-400/20 blur-[120px]" />
                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-100 ring-1 ring-white/20">
                            {d.eyebrow}
                        </span>
                        <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white lg:text-6xl">
                            {d.title}
                            <br />
                            <span className="bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent">{d.highlight}</span>
                        </h1>
                        <p className="mt-4 max-w-xl text-lg leading-relaxed text-blue-100/90">{d.subtitle}</p>
                    </div>
                </Container>
            </section>

            {/* FORM */}
            <Container className="relative z-20 -mt-20 pb-20 lg:-mt-24">
                <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_280px] lg:items-start">
                    <div className="rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
                        <div className="border-b border-slate-100 px-5 pb-1 pt-6 sm:px-8">
                            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{dict.title}</h2>
                            <p className="mt-1 text-sm text-slate-500">{dict.subtitle}</p>
                        </div>
                        <ScholarshipWizard
                            dict={dict}
                            variant="page"
                            doneHref={localizedHref(lang, "/")}
                            doneLabel={dict.success.home}
                        />
                    </div>

                    <aside className="grid gap-3 sm:grid-cols-3 lg:sticky lg:top-28 lg:grid-cols-1">
                        {d.highlights.map((h, i) => {
                            const Icon = HIGHLIGHT_ICONS[i];
                            return (
                                <div key={h.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0056A7]">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <h3 className="mt-3 text-sm font-bold text-slate-900">{h.title}</h3>
                                    <p className="mt-1 text-sm leading-relaxed text-slate-500">{h.text}</p>
                                </div>
                            );
                        })}
                    </aside>
                </div>
            </Container>
        </div>
    );
}
