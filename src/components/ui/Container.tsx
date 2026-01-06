import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    className?: string
    as?: React.ElementType
}

export function Container({
    children,
    className,
    as: Component = "div",
    ...props
}: ContainerProps) {
    return (
        <Component
            className={cn(
                "container mx-auto px-6 md:px-8",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    )
}
