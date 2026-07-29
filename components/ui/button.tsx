import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#050507] disabled:pointer-events-none disabled:opacity-40 active:scale-[0.97]"
    
    const variants = {
      primary: "bg-brand-primary text-white hover:bg-brand-deep shadow-[0_0_16px_rgba(147,51,234,0.4)] hover:shadow-[0_0_24px_rgba(147,51,234,0.55)]",
      secondary: "bg-brand-secondary/15 text-brand-secondary border border-brand-secondary/25 hover:bg-brand-secondary/25",
      outline: "border border-brand-border text-brand-text bg-transparent hover:border-brand-secondary/40 hover:bg-white/5",
      ghost: "text-brand-muted hover:bg-white/5 hover:text-brand-text",
    }
    
    const sizes = {
      default: "h-10 px-5 py-2",
      sm: "h-9 rounded-md px-4 text-[13px]",
      lg: "h-12 rounded-lg px-8 text-base",
      icon: "h-9 w-9",
    }

    const Comp = asChild && React.isValidElement(props.children) ? (props.children as React.ReactElement<any>).type : "button"
    const componentProps = asChild && React.isValidElement(props.children) ? (props.children as React.ReactElement<any>).props : {}

    return React.createElement(
      Comp as any,
      {
        className: cn(baseStyles, variants[variant], sizes[size], className),
        ref,
        ...componentProps,
        ...props,
      },
      asChild && React.isValidElement(props.children) ? (props.children as React.ReactElement<any>).props.children : props.children
    )
  }
)
Button.displayName = "Button"

export { Button }
