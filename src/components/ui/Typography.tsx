import { cn } from "@/lib/utils"

type HeadingVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
type TextVariant = "default" | "muted" | "large" | "small" | "lead"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    variant?: HeadingVariant
    children: React.ReactNode
    className?: string
    as?: React.ElementType
}

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    variant?: TextVariant
    children: React.ReactNode
    className?: string
    as?: React.ElementType
}

export const headingStyles = {
    h1: "text-4xl md:text-[56px] font-normal tracking-tight font-heading leading-[1.15] text-corporate-dark",
    h2: "text-3xl md:text-[42px] font-normal tracking-tight font-heading leading-tight text-corporate-dark",
    h3: "text-2xl md:text-3xl font-normal font-heading text-corporate-dark",
    h4: "text-xl md:text-2xl font-normal font-heading text-corporate-dark",
    h5: "text-lg md:text-xl font-bold font-heading text-corporate-dark",
    h6: "text-base font-bold font-heading text-corporate-dark",
}

export const textStyles = {
    default: "text-[18px] leading-relaxed text-text-main font-bold", // High readability verified from site
    muted: "text-sm text-slate-500 font-medium",
    large: "text-xl font-medium leading-relaxed text-corporate-dark",
    small: "text-sm font-medium leading-none text-slate-500",
    lead: "text-xl text-corporate-dark leading-relaxed font-medium",
}

export function Heading({
    variant = "h2",
    children,
    className,
    as,
    ...props
}: HeadingProps) {
    const Component = as || variant

    return (
        <Component
            className={cn(headingStyles[variant], className)}
            {...props}
        >
            {children}
        </Component>
    )
}

export function Text({
    variant = "default",
    children,
    className,
    as: Component = "p",
    ...props
}: TextProps) {
    return (
        <Component
            className={cn(textStyles[variant], className)}
            {...props}
        >
            {children}
        </Component>
    )
}
