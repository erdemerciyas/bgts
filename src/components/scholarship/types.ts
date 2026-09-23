import type tr from "@/dictionaries/tr.json";
import type { ScholarshipData } from "@/lib/scholarship/schema";

export type ScholarshipDict = (typeof tr)["scholarship"];

export type StepProps = {
    data: ScholarshipData;
    /** `clear` verilirse yalnızca o hata yolları temizlenir; aksi halde patch anahtarlarına ait hatalar temizlenir. */
    update: (patch: Partial<ScholarshipData>, clear?: string[]) => void;
    err: (path: string) => string | undefined;
    dict: ScholarshipDict;
};

type StringField = {
    [K in keyof ScholarshipData]: ScholarshipData[K] extends string ? K : never;
}[keyof ScholarshipData];

/** Metin alanlarını state'e bağlayan ortak prop üretici. */
export function binder({ data, update, err, dict }: StepProps) {
    const labels = dict.labels as Record<string, string>;
    const placeholders = dict.placeholders as Record<string, string | undefined>;
    return (name: StringField) => ({
        id: name,
        label: labels[name],
        placeholder: placeholders[name],
        value: data[name],
        onChange: (value: string) => update({ [name]: value } as Partial<ScholarshipData>),
        error: err(name),
    });
}

/** Sabit sıralı değer listesini sözlük etiketleriyle seçeneğe çevirir. */
export function options<T extends string>(values: readonly T[], labels: Record<string, string>) {
    return values.map((value) => ({ value, label: labels[value] }));
}
