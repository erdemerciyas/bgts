"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import { AnimatePresence, motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/** Her başarısız "İleri" denemesinde artar; hatalı alanlar bu değer değişince sallanır. */
export const ShakeContext = createContext(0);

const inputBase =
    "w-full rounded-xl border bg-slate-50 hover:border-slate-300 focus:border-blue-400 focus:bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all";

const inputClass = (error?: string) =>
    cn(inputBase, error ? "border-red-300 bg-red-50/40 focus:border-red-400 focus:ring-red-500/20" : "border-slate-200");

const aria = (id: string, error?: string) => ({
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `sch-${id}-error` : undefined,
});

type ShellProps = {
    id: string;
    label: ReactNode;
    error?: string;
    optional?: string;
    hint?: string;
    className?: string;
    /** Radio grupları için label yerine başlık olarak render edilir. */
    group?: boolean;
    children: ReactNode;
};

function FieldShell({ id, label, error, optional, hint, className, group, children }: ShellProps) {
    const nonce = useContext(ShakeContext);
    const controls = useAnimationControls();
    const reduce = useReducedMotion();

    useEffect(() => {
        if (error && nonce && !reduce) {
            controls.start({ x: [0, -6, 6, -4, 4, 0], transition: { duration: 0.4 } });
        }
    }, [nonce, error, reduce, controls]);

    const Label = group ? "span" : "label";

    return (
        <motion.div animate={controls} className={className}>
            <Label
                {...(group ? { id: `sch-${id}-label` } : { htmlFor: `sch-${id}` })}
                className="block text-sm font-bold text-slate-700 mb-1.5"
            >
                {label}
                {optional && <span className="ml-1 font-normal text-slate-400">({optional})</span>}
            </Label>
            {children}
            {hint && !error && <p className="mt-1.5 text-xs text-slate-500">{hint}</p>}
            <AnimatePresence initial={false}>
                {error && (
                    <motion.p
                        id={`sch-${id}-error`}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-1.5 text-xs font-medium text-red-600"
                    >
                        {error}
                    </motion.p>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

type BaseProps = {
    id: string;
    label: ReactNode;
    value: string;
    onChange: (value: string) => void;
    error?: string;
    optional?: string;
    hint?: string;
    placeholder?: string;
    className?: string;
};

type TextFieldProps = BaseProps & {
    type?: "text" | "email" | "date" | "tel";
    inputMode?: "text" | "numeric" | "decimal" | "tel" | "email";
    autoComplete?: string;
    maxLength?: number;
    list?: string;
    max?: string;
};

export function TextField({ id, label, error, optional, hint, className, onChange, type = "text", ...input }: TextFieldProps) {
    return (
        <FieldShell id={id} label={label} error={error} optional={optional} hint={hint} className={className}>
            <input
                id={`sch-${id}`}
                name={id}
                type={type}
                onChange={(e) => onChange(e.target.value)}
                className={inputClass(error)}
                {...aria(id, error)}
                {...input}
            />
        </FieldShell>
    );
}

export function TextAreaField({ id, label, error, optional, hint, className, onChange, ...input }: BaseProps & { rows?: number; maxLength?: number }) {
    return (
        <FieldShell id={id} label={label} error={error} optional={optional} hint={hint} className={className}>
            <textarea
                id={`sch-${id}`}
                name={id}
                rows={3}
                onChange={(e) => onChange(e.target.value)}
                className={cn(inputClass(error), "resize-none")}
                {...aria(id, error)}
                {...input}
            />
        </FieldShell>
    );
}

export function SelectField({
    id, label, value, onChange, error, optional, className, placeholder, options,
}: BaseProps & { options: { value: string; label: string }[] }) {
    return (
        <FieldShell id={id} label={label} error={error} optional={optional} className={className}>
            <div className="relative">
                <select
                    id={`sch-${id}`}
                    name={id}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className={cn(inputClass(error), "appearance-none pr-10", !value && "text-slate-400")}
                    {...aria(id, error)}
                >
                    <option value="" disabled>{placeholder}</option>
                    {options.map((o) => (
                        <option key={o.value} value={o.value} className="text-slate-900">{o.label}</option>
                    ))}
                </select>
                <ChevronDown aria-hidden className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            </div>
        </FieldShell>
    );
}

type RadioOption = { value: string; label: string; hint?: string; icon?: ReactNode };

export function RadioCards({
    id, label, value, onChange, error, className, options, columns = 2,
}: Omit<BaseProps, "placeholder"> & { options: RadioOption[]; columns?: 2 | 3 }) {
    return (
        <FieldShell id={id} label={label} error={error} className={className} group>
            <div
                role="radiogroup"
                aria-labelledby={`sch-${id}-label`}
                className={cn("grid gap-2.5", columns === 3 ? "grid-cols-3" : "grid-cols-2")}
            >
                {options.map((o) => {
                    const selected = value === o.value;
                    return (
                        <label
                            key={o.value}
                            className={cn(
                                "relative flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-all has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-blue-500/40",
                                selected
                                    ? "border-[#0056A7] bg-blue-50/70 text-[#0056A7] shadow-sm shadow-blue-500/10"
                                    : error
                                        ? "border-red-300 bg-red-50/40 text-slate-700 hover:border-red-400"
                                        : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-white"
                            )}
                        >
                            <input
                                type="radio"
                                name={id}
                                value={o.value}
                                checked={selected}
                                onChange={() => onChange(o.value)}
                                className="sr-only"
                                {...aria(id, error)}
                            />
                            {o.icon && (
                                <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-lg", selected ? "bg-[#0056A7] text-white" : "bg-white text-slate-500 border border-slate-200")}>
                                    {o.icon}
                                </span>
                            )}
                            <span className="min-w-0 flex-1">
                                <span className="block font-semibold">{o.label}</span>
                                {o.hint && <span className="block text-xs font-normal text-slate-500">{o.hint}</span>}
                            </span>
                            <span
                                aria-hidden
                                className={cn(
                                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                                    selected ? "border-[#0056A7] bg-[#0056A7] text-white" : "border-slate-300 bg-white"
                                )}
                            >
                                {selected && <Check className="h-3 w-3" strokeWidth={3} />}
                            </span>
                        </label>
                    );
                })}
            </div>
        </FieldShell>
    );
}

export function CheckboxField({
    id, label, checked, onChange, error,
}: { id: string; label: ReactNode; checked: boolean; onChange: (checked: boolean) => void; error?: string }) {
    return (
        <FieldShell id={id} label={null} error={error} group>
            <label className="-mt-1.5 flex cursor-pointer items-start gap-3 group">
                <input
                    id={`sch-${id}`}
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 accent-[#0056A7] focus:ring-2 focus:ring-blue-500/30"
                    {...aria(id, error)}
                />
                <span className="text-sm leading-relaxed text-slate-600 group-hover:text-slate-800 transition-colors">{label}</span>
            </label>
        </FieldShell>
    );
}

/** TR telefon maskesi: 0 (5xx) xxx xx xx */
export function formatPhone(raw: string): string {
    let d = raw.replace(/\D/g, "");
    if (!d) return "";
    if (d[0] !== "0") d = `0${d}`;
    d = d.slice(0, 11);
    let out = "0";
    if (d.length > 1) out += ` (${d.slice(1, 4)}`;
    if (d.length > 4) out += `) ${d.slice(4, 7)}`;
    if (d.length > 7) out += ` ${d.slice(7, 9)}`;
    if (d.length > 9) out += ` ${d.slice(9, 11)}`;
    return out;
}

export function PhoneField(props: BaseProps) {
    return (
        <TextField
            {...props}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            maxLength={17}
            onChange={(v) => props.onChange(formatPhone(v))}
        />
    );
}

/** Para alanı: state'te yalnızca rakamlar tutulur, ekranda ₺ ve binlik ayraçla gösterilir. */
export function MoneyField({ id, label, value, onChange, error, optional, hint, className }: BaseProps) {
    return (
        <FieldShell id={id} label={label} error={error} optional={optional} hint={hint} className={className}>
            <div className="relative">
                <span aria-hidden className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-400">₺</span>
                <input
                    id={`sch-${id}`}
                    name={id}
                    inputMode="numeric"
                    autoComplete="off"
                    placeholder="0"
                    value={value ? Number(value).toLocaleString("tr-TR") : ""}
                    onChange={(e) => onChange(e.target.value.replace(/\D/g, "").replace(/^0+(?=\d)/, "").slice(0, 9))}
                    className={cn(inputClass(error), "pl-9 tabular-nums")}
                    {...aria(id, error)}
                />
            </div>
        </FieldShell>
    );
}

/** Koşullu alanlar için yükseklik + opacity ile açılan kapsayıcı. */
export function Reveal({ show, children, className }: { show: boolean; children: ReactNode; className?: string }) {
    const reduce = useReducedMotion();
    return (
        <AnimatePresence initial={false}>
            {show && (
                <motion.div
                    initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
                    animate={reduce ? { opacity: 1 } : { opacity: 1, height: "auto" }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="-mx-1 overflow-hidden px-1"
                >
                    <div className={cn("pt-1 pb-1", className)}>{children}</div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export function SectionTitle({ children }: { children: ReactNode }) {
    return <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">{children}</h4>;
}
