"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CheckCircle2, ChevronLeft, ChevronRight, Download, Eye, Inbox, Loader2, Trash2, X } from "lucide-react";
import type { ApplicationRow } from "@/lib/scholarship/db";
import { SECTIONS, type Column } from "@/lib/scholarship/labels";
import { withBasePath } from "@/lib/base-path";
import { Heading, Text } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import { deleteApplicationsAction } from "./actions";

type Props = {
    rows: ApplicationRow[];
    total: number;
    page: number;
    pageCount: number;
    pageSize: number;
    pageSizes: number[];
};

const EXPORT_URL = withBasePath("/tr/api/scholarship/export");

const formatDate = (value: string) =>
    new Date(value).toLocaleString("tr-TR", { timeZone: "Europe/Istanbul", dateStyle: "short", timeStyle: "short" });

const pageHref = (page: number, size: number) => `?page=${page}&size=${size}`;

/** 1 … 4 5 [6] 7 8 … 20 */
function pageList(page: number, count: number): (number | "…")[] {
    const pages = new Set([1, count, page - 2, page - 1, page, page + 1, page + 2].filter((p) => p >= 1 && p <= count));
    const sorted = [...pages].sort((a, b) => a - b);
    return sorted.flatMap((p, i) => (i && p - sorted[i - 1] > 1 ? ["…" as const, p] : [p]));
}

/* BGTS buton dili: hap formu, düz, hover'da belirgin gölge (FRONTEND_STANDARDS §3). */
const focus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corporate-accent/50 focus-visible:ring-offset-2";
const btn = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${focus}`;
const primary = `${btn} bg-corporate-secondary text-white hover:bg-corporate-dark hover:shadow-lg hover:shadow-corporate-secondary/25`;
const secondary = `${btn} border border-border bg-white text-corporate-dark hover:border-corporate-accent/40 hover:shadow-lg hover:shadow-corporate-dark/5`;
const danger = `${btn} bg-corporate-warm text-white hover:bg-[#d24a3a] hover:shadow-lg hover:shadow-corporate-warm/25`;
const checkbox = "h-4 w-4 cursor-pointer rounded-sm accent-corporate-secondary";

export default function ApplicationsTable({ rows, total, page, pageCount, pageSize, pageSizes }: Props) {
    const router = useRouter();
    // Seçim sayfalar arasında korunur (istemci bileşeni aynı rotada yeniden oluşturulmaz).
    const [selected, setSelected] = useState<Set<number>>(new Set());
    const [preview, setPreview] = useState<ApplicationRow | null>(null);
    const [confirm, setConfirm] = useState<number[] | null>(null);
    const [message, setMessage] = useState<{ text: string; error?: boolean } | null>(null);
    const [pending, startTransition] = useTransition();

    const pageIds = rows.map((r) => r.id);
    const allOnPage = pageIds.length > 0 && pageIds.every((id) => selected.has(id));
    const someOnPage = pageIds.some((id) => selected.has(id));

    const toggle = (id: number) =>
        setSelected((s) => {
            const next = new Set(s);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });

    const togglePage = () =>
        setSelected((s) => {
            const next = new Set(s);
            pageIds.forEach((id) => (allOnPage ? next.delete(id) : next.add(id)));
            return next;
        });

    const remove = (ids: number[]) =>
        startTransition(async () => {
            try {
                const { deleted } = await deleteApplicationsAction(ids);
                // await sonrası güncellemeler de transition'da: mesaj ve dialog kapanışı yenilenen listeyle birlikte gelir.
                startTransition(() => {
                    setSelected((s) => new Set([...s].filter((id) => !ids.includes(id))));
                    setPreview(null);
                    setConfirm(null);
                    setMessage({ text: `${deleted} başvuru silindi.` });
                    // Sayfadaki tüm kayıtlar silindiyse bir önceki sayfaya geç.
                    if (page > 1 && pageIds.every((id) => ids.includes(id))) router.push(pageHref(page - 1, pageSize));
                    else router.refresh();
                });
            } catch {
                setConfirm(null);
                setMessage({ text: "Silme işlemi başarısız oldu. Lütfen tekrar deneyin.", error: true });
            }
        });

    const selectedIds = [...selected];

    return (
        <>
            {/* Araç çubuğu */}
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <Heading variant="h4">Başvuru listesi</Heading>
                    <Text variant="muted" className="mt-1">
                        {selected.size > 0 ? (
                            <>
                                <span className="font-semibold text-corporate-secondary">{selected.size.toLocaleString("tr-TR")} başvuru seçili</span>
                                {" · "}
                                <button type="button" onClick={() => setSelected(new Set())} className="font-semibold underline underline-offset-2 transition-colors duration-300 hover:text-corporate-dark">
                                    Seçimi temizle
                                </button>
                            </>
                        ) : (
                            "Önizlemek için bir satıra tıklayın; toplu işlem için satırları seçin."
                        )}
                    </Text>
                </div>
                <div className="flex flex-wrap gap-2">
                    {selected.size > 0 && (
                        <>
                            <button type="button" onClick={() => setConfirm(selectedIds)} className={cn(secondary, "text-corporate-warm")} disabled={pending}>
                                <Trash2 className="h-4 w-4" />
                                Seçilenleri sil
                            </button>
                            <ExportForm ids={selectedIds} className={secondary}>
                                Seçilenleri Excel&apos;e aktar ({selected.size})
                            </ExportForm>
                        </>
                    )}
                    <a href={EXPORT_URL} className={cn(primary, total === 0 && "pointer-events-none opacity-50")} aria-disabled={total === 0}>
                        <Download className="h-4 w-4" />
                        Tümünü Excel olarak indir
                    </a>
                </div>
            </div>

            {message && (
                <div
                    role="status"
                    className={cn(
                        "mt-6 flex items-center gap-3 rounded-sm border-l-4 bg-white px-4 py-3 text-sm font-medium shadow-sm",
                        message.error ? "border-corporate-warm text-corporate-warm" : "border-corporate-tertiary text-corporate-dark"
                    )}
                >
                    <CheckCircle2 className={cn("h-5 w-5 shrink-0", message.error ? "hidden" : "text-corporate-tertiary")} />
                    <span className="flex-1">{message.text}</span>
                    <button type="button" onClick={() => setMessage(null)} aria-label="Kapat" className={cn("rounded-full p-1 text-text-secondary hover:bg-corporate-surface", focus)}>
                        <X className="h-4 w-4" />
                    </button>
                </div>
            )}

            {/* Tablo */}
            <div className="mt-6 overflow-x-auto rounded-sm border border-border bg-white shadow-sm">
                <table className="w-full min-w-[880px] text-left text-sm">
                    <thead className="border-b border-border bg-corporate-surface">
                        <tr>
                            <th className="w-12 px-5 py-3.5">
                                <input
                                    type="checkbox"
                                    aria-label="Bu sayfadakilerin tümünü seç"
                                    checked={allOnPage}
                                    ref={(el) => {
                                        if (el) el.indeterminate = someOnPage && !allOnPage;
                                    }}
                                    onChange={togglePage}
                                    disabled={rows.length === 0}
                                    className={checkbox}
                                />
                            </th>
                            {["Tarih", "Başvuru No", "Ad Soyad", "Üniversite", "E-posta", "Telefon", ""].map((h, i) => (
                                <th key={i} className="whitespace-nowrap px-5 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-text-secondary">{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {rows.length === 0 ? (
                            <tr>
                                <td colSpan={8} className="px-5 py-16 text-center">
                                    <Inbox className="mx-auto h-10 w-10 text-corporate-accent/40" />
                                    <Heading variant="h5" as="p" className="mt-3">Henüz başvuru yok</Heading>
                                    <Text variant="muted" className="mt-1">Başvuru formu doldurulduğunda kayıtlar burada listelenir.</Text>
                                </td>
                            </tr>
                        ) : (
                            rows.map((r) => {
                                const isSelected = selected.has(r.id);
                                return (
                                    <tr
                                        key={r.id}
                                        onClick={() => setPreview(r)}
                                        className={cn(
                                            "group cursor-pointer transition-colors duration-300",
                                            isSelected ? "bg-corporate-secondary/[0.06]" : "hover:bg-corporate-surface"
                                        )}
                                    >
                                        <td className={cn("border-l-2 px-5 py-3.5", isSelected ? "border-corporate-secondary" : "border-transparent")} onClick={(e) => e.stopPropagation()}>
                                            <input
                                                type="checkbox"
                                                aria-label={`${r.first_name} ${r.last_name} başvurusunu seç`}
                                                checked={isSelected}
                                                onChange={() => toggle(r.id)}
                                                className={checkbox}
                                            />
                                        </td>
                                        <td className="whitespace-nowrap px-5 py-3.5 text-text-secondary">{formatDate(r.created_at)}</td>
                                        <td className="whitespace-nowrap px-5 py-3.5 font-mono text-xs text-corporate-secondary">{r.reference}</td>
                                        <td className="whitespace-nowrap px-5 py-3.5 font-semibold text-corporate-dark">{r.first_name} {r.last_name}</td>
                                        <td className="px-5 py-3.5 text-corporate-dark">{r.university}</td>
                                        <td className="px-5 py-3.5 text-text-secondary">{r.email}</td>
                                        <td className="whitespace-nowrap px-5 py-3.5 text-text-secondary">{r.phone}</td>
                                        <td className="px-5 py-3.5 text-right">
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setPreview(r);
                                                }}
                                                className={cn(
                                                    "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-corporate-secondary transition-all duration-300 hover:bg-corporate-secondary hover:text-white",
                                                    focus
                                                )}
                                            >
                                                <Eye className="h-4 w-4" />
                                                Önizle
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>

            <Pagination page={page} pageCount={pageCount} pageSize={pageSize} pageSizes={pageSizes} total={total} shown={rows.length} />

            {preview && (
                <PreviewModal row={preview} pending={pending} onClose={() => setPreview(null)} onDelete={() => setConfirm([preview.id])} />
            )}

            {confirm && (
                <ConfirmDialog count={confirm.length} pending={pending} onCancel={() => setConfirm(null)} onConfirm={() => remove(confirm)} />
            )}
        </>
    );
}

/** Seçili id'ler çok sayıda olabileceği için URL yerine POST gövdesiyle gönderilir; yanıt dosya olarak iner. */
function ExportForm({ ids, className, children }: { ids: number[]; className: string; children: React.ReactNode }) {
    return (
        <form method="post" action={EXPORT_URL}>
            <input type="hidden" name="ids" value={ids.join(",")} />
            <button type="submit" className={className}>
                <Download className="h-4 w-4" />
                {children}
            </button>
        </form>
    );
}

function Pagination({
    page, pageCount, pageSize, pageSizes, total, shown,
}: { page: number; pageCount: number; pageSize: number; pageSizes: number[]; total: number; shown: number }) {
    const router = useRouter();
    const from = total === 0 ? 0 : (page - 1) * pageSize + 1;
    const to = from + shown - (shown ? 1 : 0);
    const link = `flex h-9 min-w-9 items-center justify-center rounded-full px-3 text-sm font-semibold transition-all duration-300 ${focus}`;

    return (
        <nav aria-label="Sayfalama" className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
                <Text variant="muted">
                    <span className="text-corporate-dark">{from.toLocaleString("tr-TR")}–{to.toLocaleString("tr-TR")}</span> / {total.toLocaleString("tr-TR")} başvuru
                </Text>
                <label className="flex items-center gap-2 text-sm font-medium text-text-secondary">
                    Sayfa başına
                    <select
                        value={pageSize}
                        onChange={(e) => router.push(pageHref(1, Number(e.target.value)))}
                        className={cn("cursor-pointer rounded-full border border-border bg-white px-3 py-1.5 font-semibold text-corporate-dark", focus)}
                    >
                        {pageSizes.map((s) => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                </label>
            </div>
            {pageCount > 1 && (
                <div className="flex items-center gap-1">
                    <PageLink href={pageHref(page - 1, pageSize)} disabled={page === 1} className={link} label="Önceki sayfa">
                        <ChevronLeft className="h-4 w-4" />
                    </PageLink>
                    {pageList(page, pageCount).map((p, i) =>
                        p === "…" ? (
                            <span key={`e${i}`} className="px-1 text-text-secondary">…</span>
                        ) : (
                            <Link
                                key={p}
                                href={pageHref(p, pageSize)}
                                aria-current={p === page ? "page" : undefined}
                                className={cn(link, p === page ? "bg-corporate-secondary text-white shadow-sm" : "text-corporate-dark hover:bg-white hover:shadow-sm")}
                            >
                                {p}
                            </Link>
                        )
                    )}
                    <PageLink href={pageHref(page + 1, pageSize)} disabled={page === pageCount} className={link} label="Sonraki sayfa">
                        <ChevronRight className="h-4 w-4" />
                    </PageLink>
                </div>
            )}
        </nav>
    );
}

function PageLink({ href, disabled, className, label, children }: { href: string; disabled: boolean; className: string; label: string; children: React.ReactNode }) {
    if (disabled) return <span aria-hidden className={cn(className, "text-border")}>{children}</span>;
    return (
        <Link href={href} aria-label={label} className={cn(className, "text-corporate-dark hover:bg-white hover:shadow-sm")}>
            {children}
        </Link>
    );
}

/** Esc ile kapanır, açıkken sayfa kaydırması kilitlenir. */
function useModal(onClose: () => void) {
    const ref = useRef<HTMLDivElement>(null);
    const close = useRef(onClose);
    useEffect(() => {
        close.current = onClose;
    });
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && close.current();
        const overflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", onKey);
        ref.current?.focus();
        return () => {
            document.body.style.overflow = overflow;
            document.removeEventListener("keydown", onKey);
        };
    }, []);
    return ref;
}

function formatValue(column: Column, value: string | number) {
    if (value === "" || value === null || value === undefined) return <span className="text-border">—</span>;
    if (typeof value === "number") return `${value.toLocaleString("tr-TR")}${column.header.includes("(₺)") ? " ₺" : ""}`;
    if (column.header === "Kardeşler") {
        return (
            <ul className="space-y-1">
                {value.split("; ").map((s) => (
                    <li key={s} className="flex gap-2">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-corporate-highlight" />
                        {s}
                    </li>
                ))}
            </ul>
        );
    }
    return <span className="whitespace-pre-line">{value}</span>;
}

const overlay = "fixed inset-0 flex bg-corporate-dark/60 backdrop-blur-sm";

function PreviewModal({ row, pending, onClose, onDelete }: { row: ApplicationRow; pending: boolean; onClose: () => void; onDelete: () => void }) {
    const ref = useModal(onClose);

    return (
        <div className={cn(overlay, "z-50 items-end justify-center sm:items-center sm:p-6")} onClick={onClose}>
            <div
                ref={ref}
                role="dialog"
                aria-modal="true"
                aria-labelledby="preview-title"
                tabIndex={-1}
                onClick={(e) => e.stopPropagation()}
                className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-sm bg-white shadow-2xl outline-none sm:rounded-sm"
            >
                <header className="relative flex items-start justify-between gap-4 bg-corporate-dark px-6 py-6 sm:px-8">
                    <div>
                        <Text variant="eyebrow" className="text-corporate-highlight">
                            {row.reference} · {formatDate(row.created_at)}
                        </Text>
                        <Heading variant="h3" id="preview-title" className="mt-2 text-white">{row.first_name} {row.last_name}</Heading>
                        <Text variant="muted" className="mt-1 text-white/60">{row.university}</Text>
                    </div>
                    <button type="button" onClick={onClose} aria-label="Kapat" className={cn("rounded-full p-2 text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white", focus)}>
                        <X className="h-5 w-5" />
                    </button>
                </header>

                <div className="flex-1 space-y-8 overflow-y-auto bg-corporate-surface px-6 py-6 sm:px-8">
                    {SECTIONS.map((section, i) => (
                        <section key={section.title}>
                            <div className="flex items-center gap-3">
                                <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-corporate-secondary font-heading text-xs font-bold text-white">{i + 1}</span>
                                <Heading variant="h6" as="h3">{section.title}</Heading>
                            </div>
                            <dl className="mt-3 divide-y divide-border rounded-sm border border-border bg-white">
                                {section.columns.map((c) => (
                                    <div key={c.header} className="grid gap-1 px-4 py-3 text-sm sm:grid-cols-[40%_1fr] sm:gap-4">
                                        <dt className="text-text-secondary">{c.header}</dt>
                                        <dd className="font-semibold text-corporate-dark">{formatValue(c, c.value(row.data))}</dd>
                                    </div>
                                ))}
                            </dl>
                        </section>
                    ))}
                </div>

                <footer className="flex flex-wrap justify-between gap-2 border-t border-border bg-white px-6 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-8">
                    <button type="button" onClick={onDelete} className={cn(secondary, "text-corporate-warm")} disabled={pending}>
                        <Trash2 className="h-4 w-4" />
                        Başvuruyu sil
                    </button>
                    <ExportForm ids={[row.id]} className={primary}>
                        Excel&apos;e aktar
                    </ExportForm>
                </footer>
            </div>
        </div>
    );
}

function ConfirmDialog({ count, pending, onCancel, onConfirm }: { count: number; pending: boolean; onCancel: () => void; onConfirm: () => void }) {
    const ref = useModal(pending ? () => {} : onCancel);

    return (
        <div className={cn(overlay, "z-[60] items-center justify-center p-4")} onClick={pending ? undefined : onCancel}>
            <div
                ref={ref}
                role="alertdialog"
                aria-modal="true"
                aria-labelledby="confirm-title"
                aria-describedby="confirm-text"
                tabIndex={-1}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md rounded-sm border-t-4 border-corporate-warm bg-white p-6 shadow-2xl outline-none sm:p-8"
            >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-corporate-warm/10 text-corporate-warm">
                    <Trash2 className="h-5 w-5" />
                </span>
                <Heading variant="h4" id="confirm-title" className="mt-4">
                    {count === 1 ? "Başvuru silinsin mi?" : `${count} başvuru silinsin mi?`}
                </Heading>
                <Text id="confirm-text" className="mt-2 text-sm text-text-secondary">
                    Bu işlem geri alınamaz; kayıt veritabanından kalıcı olarak silinir.
                </Text>
                <div className="mt-8 flex flex-wrap justify-end gap-2">
                    <button type="button" onClick={onCancel} className={secondary} disabled={pending}>Vazgeç</button>
                    <button type="button" onClick={onConfirm} className={danger} disabled={pending}>
                        {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
                        Sil
                    </button>
                </div>
            </div>
        </div>
    );
}
