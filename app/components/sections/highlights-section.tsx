"use client";

import { motion } from "framer-motion";
import { ScrollText, Dices, Store } from "lucide-react";
import { fadeUp } from "../../constants/transitions";

export const HighlightsSection = () => {
    return (
        <motion.section
            {...fadeUp}
            className="grid gap-4 rounded-3xl border border-[var(--color-grays_500)] bg-[var(--color-primary)] p-6 md:grid-cols-3"
        >
            <div className="rounded-2xl border border-[var(--color-grays_500)] bg-[var(--color-background)] p-4">
                <p className="inline-flex items-center gap-2 text-sm font-semibold">
                    <ScrollText className="h-4 w-4 text-[var(--color-tertiary)]" />
                    Para Jogadores & Mestres de RPG
                </p>
                <p className="mt-2 text-sm text-[var(--color-grays_100)]">
                    Encontre campanhas abertas, monte sua party e organize suas sessões presenciais ou online.
                </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-grays_500)] bg-[var(--color-background)] p-4">
                <p className="inline-flex items-center gap-2 text-sm font-semibold">
                    <Dices className="h-4 w-4 text-[var(--color-tertiary)]" />
                    Para Fãs de Board Games
                </p>
                <p className="mt-2 text-sm text-[var(--color-grays_100)]">
                    Descubra novos jogos de tabuleiro, combine partidas e encontre jogadores com a mesma afinidade.
                </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-grays_500)] bg-[var(--color-background)] p-4">
                <p className="inline-flex items-center gap-2 text-sm font-semibold">
                    <Store className="h-4 w-4 text-[var(--color-tertiary)]" />
                    Para Lojas & Espaços Geek
                </p>
                <p className="mt-2 text-sm text-[var(--color-grays_100)]">
                    Coloque seu espaço no radar dos jogadores. Mostre mesas disponíveis, gerencie reservas e divulgue eventos.
                </p>
            </div>
        </motion.section>
    );
};
