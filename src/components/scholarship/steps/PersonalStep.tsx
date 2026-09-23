"use client";

import { GENDERS, MARITAL_STATUSES } from "@/lib/scholarship/schema";
import { RadioCards, SelectField, TextField } from "../fields";
import { binder, options, type StepProps } from "../types";

const PROVINCES = [
    "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Aksaray", "Amasya", "Ankara", "Antalya", "Ardahan", "Artvin",
    "Aydın", "Balıkesir", "Bartın", "Batman", "Bayburt", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa",
    "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Düzce", "Edirne", "Elazığ", "Erzincan", "Erzurum",
    "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Iğdır", "Isparta", "İstanbul", "İzmir",
    "Kahramanmaraş", "Karabük", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kırıkkale", "Kırklareli", "Kırşehir",
    "Kilis", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Mardin", "Mersin", "Muğla", "Muş", "Nevşehir",
    "Niğde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Şanlıurfa", "Şırnak",
    "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Uşak", "Van", "Yalova", "Yozgat", "Zonguldak",
];

const today = () => new Date().toISOString().slice(0, 10);

export default function PersonalStep(props: StepProps) {
    const { dict, data, update, err } = props;
    const bind = binder(props);
    const O = dict.options;

    return (
        <div className="grid gap-4 sm:grid-cols-2">
            <TextField {...bind("firstName")} autoComplete="given-name" />
            <TextField {...bind("lastName")} autoComplete="family-name" />
            <TextField {...bind("birthCity")} list="sch-provinces" autoComplete="off" />
            <datalist id="sch-provinces">
                {PROVINCES.map((p) => <option key={p} value={p} />)}
            </datalist>
            <TextField {...bind("birthDistrict")} autoComplete="off" />
            <TextField {...bind("birthDate")} type="date" max={today()} autoComplete="bday" />
            <SelectField
                {...bind("maritalStatus")}
                placeholder={dict.placeholders.select}
                options={options(MARITAL_STATUSES, O.maritalStatus)}
            />
            <RadioCards
                id="gender"
                label={dict.labels.gender}
                value={data.gender}
                onChange={(gender) => update({ gender: gender as typeof data.gender })}
                error={err("gender")}
                options={options(GENDERS, O.gender)}
            />
            <TextField {...bind("nationality")} />
            <TextField {...bind("motherName")} />
            <TextField {...bind("fatherName")} />
        </div>
    );
}
