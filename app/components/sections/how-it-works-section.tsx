"use client";

import { motion } from "framer-motion";
import { howItWorks } from "../../constants/how-it-works";
import { fadeUp } from "../../constants/transitions";

export const HowItWorksSection = () => {
    return (
        <motion.section
            id="como-funciona"
            {...fadeUp}
            className="rounded-3xl border border-[var(--color-grays_500)] bg-[var(--color-primary)] p-6 md:p-8"
        >
            <h2 className="text-3xl font-semibold">Como funciona o TableForge</h2>
            <p className="mt-2 max-w-2xl text-[var(--color-grays_100)]">
                Um fluxo simples para sair da busca cansativa por jogadores e entrar
                em partidas com grupos mais alinhados ao seu estilo.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
                {howItWorks.map((step, index) => (
                    <div
                        key={step.title}
                        className="rounded-2xl border border-[var(--color-grays_500)] bg-[var(--color-background)] p-5"
                    >
                        <p className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-tertiary)] text-sm font-semibold">
                            {index + 1}
                        </p>
                        <h3 className="text-lg font-semibold">{step.title}</h3>
                        <p className="mt-2 text-sm text-[var(--color-grays_100)]">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </motion.section>
    );
};
