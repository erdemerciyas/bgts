import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { AboutCertificationsSection } from "./AboutCertificationsSection"
import { AboutPartnersSection } from "./AboutPartnersSection"
import { AboutStatsSection } from "./AboutStatsSection"
import { AboutValuesSection } from "./AboutValuesSection"
import { LocationsMap } from "./LocationsMap"

import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"

export default async function AboutPage(props: { params: Promise<{ lang: string }> }) {
    const params = await props.params;
    const lang = params.lang as Locale;
    const dict = await getDictionary(lang);
    const about = dict.about;

    return (
        <div className="bg-white min-h-screen">

            {/* ═══ HERO — Slider format ═══ */}
            <div className="relative min-h-[55svh] md:h-[75vh] md:min-h-[500px] w-full overflow-hidden bg-slate-900">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/headers/bgts-hakkimizda-ekip.jpg"
                        alt={about.hero.title.replace(/\n/g, " ")}
                        fill
                        priority
                        className="object-cover scale-105"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-900/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                </div>

                <Container className="relative z-10 h-full flex flex-col justify-center pt-24 pb-10 md:pb-24 md:pt-24">
                    <div className="w-full md:px-14 lg:px-20">
                        <div className="max-w-4xl">
                            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 leading-[1.1] drop-shadow-2xl font-semibold tracking-tight">
                                {about.hero.title.split("\n").map((line, i) => (
                                    <span key={i}>
                                        {i > 0 && <br />}
                                        {line}
                                    </span>
                                ))}
                            </h1>
                            <p className="text-slate-200 text-base md:text-xl mb-6 md:mb-8 max-w-2xl font-light leading-relaxed drop-shadow-lg opacity-90">
                                {about.hero.subtitle}
                            </p>
                        </div>
                    </div>
                </Container>
            </div>


            <AboutStatsSection byNumbers={about.byNumbers} />

            <AboutValuesSection peopleFirst={about.peopleFirst} />

            <AboutPartnersSection partners={about.partners} />

            <AboutCertificationsSection certifications={about.certifications} />

            {/* ═══ KONUMLAR — Interactive Map ═══ */}
            <LocationsMap lang={lang} dict={dict} />

        </div>
    )
}

