"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../constants/transitions";
import { Card } from "../ui/card";
import { SectionHeading } from "../ui/section-heading";
import { DieSpot, MasterScreenSpot, StoreSignSpot } from "../ui/spot-art";

const AUDIENCES = [
    {
        title: "Para Jogadores & Mestres de RPG",
        description: "Encontre campanhas abertas, monte sua party e organize suas sessões presenciais ou online.",
        Spot: MasterScreenSpot,
    },
    {
        title: "Para Fãs de Board Games",
        description: "Descubra novos jogos de tabuleiro, combine partidas e encontre jogadores com a mesma afinidade.",
        Spot: DieSpot,
    },
    {
        title: "Para Lojas & Espaços Geek",
        description: "Coloque seu espaço no radar dos jogadores. Mostre mesas disponíveis, gerencie reservas e divulgue eventos.",
        Spot: StoreSignSpot,
    },
];

export const HighlightsSection = () => {
    return (
        <motion.section {...fadeUp} className="mx-auto max-w-6xl px-6 py-16 md:px-10">
            <SectionHeading
                numeral="III"
                kicker="Para quem é"
                title="Um ecossistema para cada papel da mesa"
                description="Jogadores, mestres, fãs de board games e lojistas encontram no TableForge o seu lugar."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-3">
                {AUDIENCES.map(({ title, description, Spot }) => (
                    <Card key={title} className="space-y-4">
                        <Spot className="h-20 w-20" />
                        <h3 className="font-display text-base font-bold uppercase tracking-[0.06em] text-[#faf3e0]">{title}</h3>
                        <p className="text-sm leading-relaxed text-[#A1A1A1]">{description}</p>
                    </Card>
                ))}
            </div>
        </motion.section>
    );
};
