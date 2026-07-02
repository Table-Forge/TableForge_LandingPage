"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { fadeUp } from "../../constants/transitions";

export const CtaSection = () => {
    return (
        <motion.section
            {...fadeUp}
            className="rounded-3xl border border-[var(--color-tertiary_30)] bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-background)] to-[var(--color-primary)] px-6 py-10 text-center md:px-10"
        >
            <div className="mx-auto max-w-2xl space-y-4">
                <p className="inline-flex items-center gap-2 rounded-full bg-[var(--color-tertiary_10)] px-4 py-2 text-sm text-[var(--color-grays_100)]">
                    <CheckCircle2 className="h-4 w-4 text-[var(--color-tertiary)]" />
                    Pronto para receber os primeiros usuários?
                </p>
                <h2 className="text-3xl font-semibold sm:text-4xl">
                    Leve sua comunidade de jogadores para o próximo nível.
                </h2>
                <p className="text-[var(--color-grays_100)]">
                    Entre na lista e seja avisado quando abrirmos novos convites para
                    o beta do TableForge.
                </p>
                <a
                    href="#captura"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--color-tertiary)] px-6 py-3 font-semibold transition hover:bg-[var(--color-secondary)]"
                >
                    Quero meu convite
                    <ArrowRight className="h-4 w-4" />
                </a>
            </div>
        </motion.section>
    );
};
