"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export const Header = () => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-between gap-4"
        >
            <a
                href="#topo"
                className="inline-flex items-center gap-1 rounded-2xl px-5 py-3"
            >
                <img
                    src="/logo/logo-image-white.png"
                    alt="TableForge Logo"
                    className="h-20 w-auto"
                />
                <img
                    src="/logo/text-h-white.png"
                    alt="TableForge Logo"
                    className="h-10 w-auto"
                />
            </a>

            <nav className="flex flex-wrap items-center gap-2 text-sm">
                <a
                    href="#recursos"
                    className="rounded-full border border-transparent px-3 py-2 text-[var(--color-grays_100)] transition hover:border-[var(--color-grays_400)] hover:text-[var(--color-white)]"
                >
                    Recursos
                </a>
                <a
                    href="#como-funciona"
                    className="rounded-full border border-transparent px-3 py-2 text-[var(--color-grays_100)] transition hover:border-[var(--color-grays_400)] hover:text-[var(--color-white)]"
                >
                    Como funciona
                </a>
                <a
                    href="#faq"
                    className="rounded-full border border-transparent px-3 py-2 text-[var(--color-grays_100)] transition hover:border-[var(--color-grays_400)] hover:text-[var(--color-white)]"
                >
                    FAQ
                </a>
                <a
                    href="#captura"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--color-tertiary)] px-4 py-2 font-semibold text-[var(--color-white)] transition hover:bg-[var(--color-secondary)]"
                >
                    Entrar no beta
                    <ArrowRight className="h-4 w-4" />
                </a>
            </nav>
        </motion.header>
    );
};
