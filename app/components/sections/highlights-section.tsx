"use client";

import { motion } from "framer-motion";
import { Flame, Star, Trophy } from "lucide-react";
import { fadeUp } from "../../constants/transitions";

export const HighlightsSection = () => {
    return (
        <motion.section
            {...fadeUp}
            className="grid gap-4 rounded-3xl border border-[var(--color-grays_500)] bg-[var(--color-primary)] p-6 md:grid-cols-3"
        >
            <div className="rounded-2xl border border-[var(--color-grays_500)] bg-[var(--color-background)] p-4">
                <p className="inline-flex items-center gap-2 text-sm font-semibold">
                    <Flame className="h-4 w-4 text-[var(--color-tertiary)]" />
                    Multiplicador de engajamento
                </p>
                <p className="mt-2 text-sm text-[var(--color-grays_100)]">
                    Experiência de cadastro mais divertida e menos burocrática.
                </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-grays_500)] bg-[var(--color-background)] p-4">
                <p className="inline-flex items-center gap-2 text-sm font-semibold">
                    <Star className="h-4 w-4 text-[var(--color-tertiary)]" />
                    Recompensa clara
                </p>
                <p className="mt-2 text-sm text-[var(--color-grays_100)]">
                    Usuário entende rápido o valor: acesso antecipado e prioridade no
                    beta.
                </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-grays_500)] bg-[var(--color-background)] p-4">
                <p className="inline-flex items-center gap-2 text-sm font-semibold">
                    <Trophy className="h-4 w-4 text-[var(--color-tertiary)]" />
                    Conversão orientada por progresso
                </p>
                <p className="mt-2 text-sm text-[var(--color-grays_100)]">
                    Barra de missão e XP incentivam conclusão do formulário.
                </p>
            </div>
        </motion.section>
    );
};
