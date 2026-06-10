import { localizedPathForLang } from '@/lib/routes'
import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import Hero from "@/components/ui/Hero"
import { ServiceStructuredData } from "@/components/seo/StructuredData"
import SoftwareDevClient from "./SoftwareDevClient"

export default async function SoftwareDevelopmentPage(props: { params: Promise<{ lang: string }> }) {
    const params = await props.params;
    const lang = params.lang as Locale;
    const dict = await getDictionary(lang);
    const content = dict.services.softwareDevelopment;

    return (
        <>
            <ServiceStructuredData
                name={content.hero.title}
                description={content.hero.subtitle}
                url={localizedPathForLang(lang, '/services/software-development')}
            />
            <Hero
                title={content.hero.title}
                subtitle={content.hero.subtitle}
                layout="simple"
                backgroundImage="/images/headers/yazilim-gelistirme-ve-inovasyon.jpg"
                align="center"
            />
            <SoftwareDevClient content={content} />
        </>
    )
}
