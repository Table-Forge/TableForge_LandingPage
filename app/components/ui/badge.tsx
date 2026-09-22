import React from "react";

export interface IBadge extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "outline";
  size?: "sm" | "md";
}

const badgeVariants: Record<NonNullable<IBadge["variant"]>, string> = {
  default: "bg-[#2D2D2D] text-[#D1D1D1] border border-[#4A4A4A]",
  primary: "bg-[#ff2400]/15 text-[#ff5a36] border border-[#ff2400]/50",
  outline: "bg-transparent text-[#D1D1D1] border border-[#4A4A4A]",
};

const sizeStyles: Record<NonNullable<IBadge["size"]>, string> = {
  sm: "text-[10px] px-2.5 py-1",
  md: "text-[11px] px-3 py-1.5",
};

const baseStyles = "inline-flex items-center gap-1.5 chamfer-sm font-semibold uppercase tracking-[0.16em]";

export function Badge({ variant = "default", size = "sm", children, className = "", ...props }: IBadge) {
  return (
    <span className={`${baseStyles} ${badgeVariants[variant]} ${sizeStyles[size]} ${className}`} {...props}>
      {children}
    </span>
  );
}
