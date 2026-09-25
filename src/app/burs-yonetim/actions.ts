"use server";

import { revalidatePath } from "next/cache";
import { deleteApplications } from "@/lib/scholarship/db";
import { parseIds } from "@/lib/scholarship/admin-ids";

// Sayfa (/burs-yonetim) middleware'deki Basic Auth ile korunur; action da aynı yola POST edilir.
export async function deleteApplicationsAction(ids: number[]): Promise<{ deleted: number }> {
    const valid = parseIds(ids);
    if (valid.length === 0) return { deleted: 0 };
    const deleted = await deleteApplications(valid);
    revalidatePath("/burs-yonetim");
    return { deleted };
}
