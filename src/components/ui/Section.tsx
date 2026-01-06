import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    className?: string
    id?: string
    background?: "default" | "muted" | "primary" | "dark"
}

export function Section({
    children,
    className,
    id,
    background = "default",
    ...props
}: SectionProps) {
    const bgStyles = {
        default: "bg-white",
        muted: "bg-slate-50",
        primary: "bg-blue-600 text-white",
        dark: "bg-slate-900 text-white",
    }

    return (
        <section
            id={id}
            className={cn(
                "relative py-16 md:py-24 overflow-hidden",
                bgStyles[background],
                className
            )}
            {...props}
        >
            {children}
        </section>
    )
}
