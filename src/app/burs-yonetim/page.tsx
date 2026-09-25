import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { countApplications, listApplications } from "@/lib/scholarship/db";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import ApplicationsTable from "./ApplicationsTable";

export const dynamic = "force-dynamic";

const PAGE_SIZES = [25, 50, 100];
const FORM_HREF = "/tr/burs-basvurusu";

export default async function ScholarshipAdminPage({
    searchParams,
}: {
    searchParams: Promise<{ page?: string; size?: string }>;
}) {
    const params = await searchParams;
    const pageSize = PAGE_SIZES.includes(Number(params.size)) ? Number(params.size) : PAGE_SIZES[0];
    const total = await countApplications();
    const pageCount = Math.max(1, Math.ceil(total / pageSize));
    const page = Math.min(Math.max(Math.floor(Number(params.page)) || 1, 1), pageCount);
    const rows = await listApplications(pageSize, (page - 1) * pageSize);

    return (
        <>
            <header className="border-b border-white/10 bg-corporate-dark">
                <Container className="flex h-16 items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <Image src="/BGTS_logo_white.png" alt="BGTS" width={96} height={42} className="h-8 w-auto object-contain" priority />
                        <span aria-hidden className="hidden h-6 w-px bg-white/20 sm:block" />
                        <Text as="span" variant="caption" className="hidden whitespace-nowrap font-bold uppercase tracking-[0.12em] text-white/70 sm:inline">
                            Burs Yönetimi
                        </Text>
                    </div>
                    <a
                        href={FORM_HREF}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
                    >
                        Başvuru formu
                        <ExternalLink className="h-4 w-4" />
                    </a>
                </Container>
            </header>

            <Section background="dark" className="overflow-hidden py-10 md:py-14">
                <div aria-hidden className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-corporate-accent/25 blur-[110px]" />
                <Container className="relative flex flex-wrap items-end justify-between gap-8">
                    <div>
                        <Text variant="eyebrow" className="text-corporate-highlight">BGTS Burs Programı</Text>
                        <Heading variant="h1" className="mt-3 text-white">Burs Başvuruları</Heading>
                        <Text className="mt-3 max-w-xl text-white/70">
                            Başvuruları inceleyin, önizleyin ve Excel olarak dışa aktarın. Kayıtlar yalnızca yetkili ekip tarafından görüntülenebilir.
                        </Text>
                    </div>
                    <dl className="flex gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10">
                        <Stat label="Toplam başvuru" value={total.toLocaleString("tr-TR")} />
                        <Stat label="Sayfa" value={`${page} / ${pageCount}`} />
                    </dl>
                </Container>
            </Section>

            <Container as="main" className="py-8 md:py-12">
                <ApplicationsTable
                    rows={rows}
                    total={total}
                    page={page}
                    pageCount={pageCount}
                    pageSize={pageSize}
                    pageSizes={PAGE_SIZES}
                />
            </Container>
        </>
    );
}

function Stat({ label, value }: { label: string; value: string }) {
    return (
        <div className="min-w-36 bg-corporate-dark px-6 py-4">
            <Text as="dt" variant="caption" className="uppercase tracking-[0.12em] text-white/50">{label}</Text>
            <dd className="mt-1 font-heading text-3xl font-semibold tracking-tight text-white">{value}</dd>
        </div>
    );
}
