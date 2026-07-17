import Image from "next/image"
import { Container } from "@/components/ui/Container"

type ArticlesHeroDict = {
    title: string
    subtitle: string
}

interface ArticlesHeroProps {
    dict: ArticlesHeroDict
}

export default function ArticlesHero({ dict }: ArticlesHeroProps) {
    return (
        <div className="relative min-h-[40vh] w-full overflow-hidden bg-slate-900 flex items-center">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/headers/analizler-hero.png"
                    alt={dict.title.replace(/\n/g, " ")}
                    fill
                    priority
                    className="object-cover scale-105"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-900/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
            </div>

            <Container className="relative z-10 w-full pt-20 pb-12 lg:pt-28 lg:pb-16">
                <div className="w-full md:px-14 lg:px-20">
                    <div className="max-w-4xl">
                        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 leading-[1.1] drop-shadow-2xl font-semibold tracking-tight">
                            {dict.title.split("\n").map((line, i) => (
                                <span key={i}>
                                    {i > 0 && <br />}
                                    {line}
                                </span>
                            ))}
                        </h1>
                        <p className="text-slate-200 text-base md:text-xl mb-6 md:mb-8 max-w-2xl font-light leading-relaxed drop-shadow-lg opacity-90">
                            {dict.subtitle}
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
