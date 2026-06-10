import { localizedPathForLang } from '@/lib/routes'
import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import Hero from "@/components/ui/Hero"
import { ServiceStructuredData } from "@/components/seo/StructuredData"
import DevOpsClient from "./DevOpsClient"

export default async function DevOpsPage(props: { params: Promise<{ lang: string }> }) {
    const params = await props.params;
    const lang = params.lang as Locale;
    const dict = await getDictionary(lang);
    const devops = dict.services.devops;

    return (
        <>
            <ServiceStructuredData
                name={devops.hero.title}
                description={devops.hero.subtitle}
                url={localizedPathForLang(lang, '/services/devops')}
            />
            <Hero
                title={devops.hero.title}
                subtitle={devops.hero.subtitle}
                className="bg-indigo-900"
                backgroundImage="/images/headers/devops-ve-altyapi-hizmetleri.jpg"
            />
            <DevOpsClient content={devops} lang={lang} />
        </>
    )
}
