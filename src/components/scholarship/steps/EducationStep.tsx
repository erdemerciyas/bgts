"use client";

import { GRADES, YES_NO } from "@/lib/scholarship/schema";
import { RadioCards, Reveal, SelectField, TextField } from "../fields";
import { binder, options, type StepProps } from "../types";

export default function EducationStep(props: StepProps) {
    const { dict, data, update, err } = props;
    const bind = binder(props);
    const showGpa = !!data.grade && data.grade !== "prep";

    return (
        <div className="grid gap-4 sm:grid-cols-2">
            <TextField {...bind("university")} className="sm:col-span-2" autoComplete="organization" />
            <TextField {...bind("faculty")} />
            <TextField {...bind("department")} />
            <SelectField
                {...bind("grade")}
                placeholder={dict.placeholders.select}
                options={options(GRADES, dict.options.grade)}
            />
            <TextField {...bind("entryDate")} type="date" max={new Date().toISOString().slice(0, 10)} />
            <RadioCards
                id="prepAttended"
                label={dict.labels.prepAttended}
                value={data.prepAttended}
                onChange={(v) => update({ prepAttended: v as typeof data.prepAttended })}
                error={err("prepAttended")}
                options={options(YES_NO, dict.options.yesNo)}
            />
            <div>
                <Reveal show={showGpa}>
                    <TextField {...bind("gpa")} inputMode="decimal" maxLength={4} />
                </Reveal>
            </div>
            <TextField {...bind("highSchool")} className="sm:col-span-2" />
        </div>
    );
}
