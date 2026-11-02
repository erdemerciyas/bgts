import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"

export interface LegalTable {
    headers: string[]
    rows: string[][]
}

export interface LegalSection {
    heading?: string
    paragraphs?: string[]
    bullets?: string[]
    table?: LegalTable
}

export interface LegalDocumentDict {
    hero: {
        title: string
        subtitle: string
        updated: string
    }
    sections: LegalSection[]
}

interface LegalDocumentProps {
    dict: LegalDocumentDict
    eyebrow: string
    related?: {
        title: string
        links: { label: string; href: string }[]
    }
}

export default function LegalDocument({ dict, eyebrow, related }: LegalDocumentProps) {
    return (
        <div className="bg-white">
            <Section background="navy" className="pt-28 md:pt-36">
                <Container>
                    <div className="max-w-3xl">
                        <Text variant="eyebrow" className="text-corporate-accent mb-4">
                            {eyebrow}
                        </Text>
                        <Heading variant="h1" className="text-white mb-5">
                            {dict.hero.title}
                        </Heading>
                        <Text className="text-white/70 mb-6">{dict.hero.subtitle}</Text>
                        <Text variant="caption" className="text-white/40">
                            {dict.hero.updated}
                        </Text>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="max-w-3xl space-y-10">
                        {dict.sections.map((section, i) => (
                            <article key={i} className="space-y-4">
                                {section.heading && (
                                    <Heading variant="h3" as="h2">
                                        {section.heading}
                                    </Heading>
                                )}

                                {section.paragraphs?.map((paragraph, j) => (
                                    <Text key={j}>{paragraph}</Text>
                                ))}

                                {section.bullets && (
                                    <ul className="space-y-2.5">
                                        {section.bullets.map((bullet, j) => (
                                            <li key={j} className="flex gap-3">
                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-corporate-accent" />
                                                <Text as="span">{bullet}</Text>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {section.table && (
                                    <div className="overflow-x-auto rounded-xl border border-slate-200">
                                        <table className="w-full min-w-[520px] border-collapse text-left">
                                            <thead className="bg-corporate-surface">
                                                <tr>
                                                    {section.table.headers.map((header, j) => (
                                                        <th
                                                            key={j}
                                                            scope="col"
                                                            className="px-4 py-3 text-sm font-semibold text-corporate-dark"
                                                        >
                                                            {header}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {section.table.rows.map((row, j) => (
                                                    <tr key={j} className="border-t border-slate-200 align-top">
                                                        {row.map((cell, k) => (
                                                            <td
                                                                key={k}
                                                                className="px-4 py-3 text-sm leading-relaxed text-text-main"
                                                            >
                                                                {cell}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>
                </Container>
            </Section>

            {related && related.links.length > 0 && (
                <Section background="muted">
                    <Container>
                        <div className="max-w-3xl">
                            <Heading variant="h4" as="h2" className="mb-5">
                                {related.title}
                            </Heading>
                            <ul className="flex flex-wrap gap-3">
                                {related.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="inline-flex rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-corporate-dark transition-colors hover:border-corporate-accent hover:text-corporate-accent"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Container>
                </Section>
            )}
        </div>
    )
}
