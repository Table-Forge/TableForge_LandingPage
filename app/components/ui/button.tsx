import React from "react";
import { D20Icon } from "./icons";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

interface IButtonStyle {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export interface IButton extends IButtonStyle, React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export interface IButtonLink extends IButtonStyle, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const baseStyles = "inline-flex items-center justify-center gap-2 border font-medium transition cursor-pointer";

const sizeStyles: Record<ButtonSize, string> = {
  xs: "h-7 px-2.5 text-xs chamfer-sm",
  sm: "h-8 px-3 text-xs chamfer-sm",
  md: "h-10 px-4 text-sm chamfer-sm",
  lg: "h-11 px-5 text-sm font-semibold chamfer-sm",
  xl: "h-12 px-6 text-base font-semibold chamfer-md",
};

const forgedHighlight = "shadow-[inset_0_1px_0_rgba(250,243,224,0.22),inset_0_-1px_0_rgba(0,0,0,0.35)]";

const variantStyles: Record<ButtonVariant, string> = {
  primary: `bg-[#ff2400] border-[#ff2400] text-white hover:brightness-110 ${forgedHighlight}`,
  secondary: `bg-[#3a3a3a] border-[#4A4A4A] text-white hover:bg-[#4A4A4A] ${forgedHighlight}`,
  outline: "bg-transparent border-[#ff2400] text-[#ff2400] hover:bg-[#ff2400]/10",
  ghost: "border-[#ff2400]/40 bg-[#ff2400]/15 text-white hover:bg-[#ff2400]/25",
};

const buttonClasses = (variant: ButtonVariant, size: ButtonSize, className: string, inactive: boolean) =>
  [
    baseStyles,
    className.includes("w-full") ? "w-full" : "w-max",
    sizeStyles[size],
    variantStyles[variant],
    inactive ? "cursor-not-allowed opacity-60" : "active:scale-[0.98]",
    className,
  ].join(" ");

export function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  className = "",
  disabled,
  children,
  ...props
}: IButton) {
  const inactive = Boolean(disabled || isLoading);

  return (
    <button className={buttonClasses(variant, size, className, inactive)} disabled={inactive} {...props}>
      {isLoading ? (
        <>
          <D20Icon className="h-4 w-4 animate-spin" />
          <span>Carregando...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}

export function ButtonLink({ variant = "primary", size = "md", className = "", children, ...props }: IButtonLink) {
  return (
    <a className={buttonClasses(variant, size, className, false)} {...props}>
      {children}
    </a>
  );
}
