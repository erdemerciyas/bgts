"use client";

import { PhoneField, TextAreaField, TextField } from "../fields";
import { binder, type StepProps } from "../types";

export default function ContactStep(props: StepProps) {
    const { dict } = props;
    const bind = binder(props);

    return (
        <div className="grid gap-4 sm:grid-cols-2">
            <TextAreaField {...bind("address")} maxLength={500} className="sm:col-span-2" />
            <PhoneField {...bind("phone")} />
            <PhoneField {...bind("phone2")} placeholder={dict.placeholders.phone} optional={dict.optional} />
            <TextField {...bind("email")} type="email" inputMode="email" autoComplete="email" className="sm:col-span-2" />
        </div>
    );
}
