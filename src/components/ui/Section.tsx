import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    className?: string
    id?: string
    background?: "default" | "muted" | "primary" | "dark" | "glazed" | "navy"
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
        muted: "bg-corporate-surface",
        glazed: "bg-[#E0ECF4]",
        primary: "bg-corporate-dark text-white",
        dark: "bg-corporate-dark text-white",
        navy: "bg-[#05081A] text-white",
    }

    return (
        <section
            id={id}
            className={cn(
                "relative py-16 md:py-24",
                bgStyles[background],
                className
            )}
            {...props}
        >
            {children}
        </section >
    )
}
