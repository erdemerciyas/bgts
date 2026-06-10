import Hero from "@/components/ui/Hero"
import { ServiceStructuredData } from "@/components/seo/StructuredData"
import { localizedPathForLang } from "@/lib/routes"
import type { Locale } from "@/i18n-config"
import ManagedServicesClient from "./ManagedServicesClient"
import { getDictionary } from "@/get-dictionary"

export default async function ManagedServicesPage(props: { params: Promise<{ lang: Locale }> }) {
    const params = await props.params;
    const lang = params.lang;
    const dict = await getDictionary(lang);
    const { hero, pillars } = dict.services.managedServices;

    return (
        <>
            <ServiceStructuredData
                name={hero.title}
                description={hero.subtitle}
                url={localizedPathForLang(lang, '/services/managed-services')}
            />
            <Hero
                title={hero.title}
                subtitle={hero.subtitle}
                layout="simple"
                backgroundImage="/images/headers/yonetilen-bulut-hizmetleri.jpg"
                align="center"
            />

            <ManagedServicesClient pillars={pillars} />
        </>
    )
}
