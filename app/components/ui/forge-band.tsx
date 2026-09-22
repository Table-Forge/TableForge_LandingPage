import React from "react";

export type IForgeBand = React.HTMLAttributes<HTMLElement>;

export function ForgeBand({ children, className = "", ...props }: IForgeBand) {
  return (
    <section className={`stone-pattern relative isolate border-y border-[#1E1E1E] py-16 lg:py-24 ${className}`} {...props}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.7)_100%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">{children}</div>
    </section>
  );
}
