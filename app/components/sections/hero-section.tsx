"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "../../constants/transitions";
import { LeadCaptureForm } from "../lead-capture-form";
import { ButtonLink } from "../ui/button";
import { Card } from "../ui/card";
import { KeystoneIcon } from "../ui/icons";
import { ForgeKicker } from "../ui/section-heading";

const LOGO_TEXT_URL =
    "https://table-forge.s3.amazonaws.com/development/public/images/6bb3f68c-851e-4e91-bba1-3bc6e8e136d9.webp?v=1";

const HERO_PILLARS = [
    { label: "Missão", value: "Unir mesas e jogadores" },
    { label: "Recompensa", value: "Acesso prioritário ao beta" },
    { label: "Comunidade", value: "Jogadores, mestres e lojas" },
];

const HERO_HIGHLIGHTS = [
    "Mesas de RPG e board games",
    "Lojas parceiras com reserva de mesas",
    "Busca por cidade, bairro e raio",
    "Eventos, torneios e calendário",
];

export const HeroSection = () => {
    return (
        <section
            id="topo"
            className="mx-auto grid max-w-6xl items-start gap-10 px-6 pb-16 pt-12 md:px-10 lg:grid-cols-[1.05fr_.95fr] lg:pt-16"
        >
            <motion.div {...fadeUp} className="space-y-8">
                <ForgeKicker>RPG, board games e lojas geek</ForgeKicker>

                <h1 className="max-w-3xl space-y-4">
                    <img src={LOGO_TEXT_URL} alt="TableForge" className="h-16 w-auto sm:h-20" />
                    <span className="block font-display text-3xl font-bold uppercase leading-[1.08] tracking-[0.02em] text-[#faf3e0] sm:text-4xl lg:text-5xl">
                        Encontre jogadores, partidas de board games e lojas <span className="text-[#ff5a36]">perto de você</span>.
                    </span>
                </h1>

                <p className="max-w-xl text-base leading-relaxed text-[#D1D1D1] sm:text-lg">
                    O TableForge conecta jogadores, mestres e lojas físicas por geolocalização.
                    Descubra mesas de RPG e board games, participe de eventos e reserve mesas
                    em espaços parceiros.
                </p>

                <div className="grid gap-3 sm:grid-cols-3">
                    {HERO_PILLARS.map((pillar) => (
                        <Card key={pillar.label} padding="sm">
                            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ff5a36]">
                                <KeystoneIcon className="h-2.5 w-2.5 shrink-0 text-[#ff2400]" aria-hidden="true" />
                                {pillar.label}
                            </p>
                            <p className="mt-2 font-display text-sm font-bold uppercase tracking-[0.04em] text-[#faf3e0]">
                                {pillar.value}
                            </p>
                        </Card>
                    ))}
                </div>

                <ul className="grid gap-2 text-sm text-[#D1D1D1] sm:grid-cols-2">
                    {HERO_HIGHLIGHTS.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                            <KeystoneIcon className="h-3 w-3 shrink-0 text-[#ff2400]" aria-hidden="true" />
                            {item}
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                    <ButtonLink href="#captura" size="lg">
                        Quero acesso antecipado
                        <ArrowRight className="h-4 w-4" />
                    </ButtonLink>
                    <ButtonLink href="#lojas" size="lg" variant="outline">
                        Para lojas parceiras
                    </ButtonLink>
                </div>
            </motion.div>

            <LeadCaptureForm />
        </section>
    );
};
