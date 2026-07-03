"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MapPin, SlidersHorizontal, ArrowRight } from "lucide-react";
import { fadeUp } from "../../constants/transitions";
import { LeadCaptureForm } from "../lead-capture-form";

export const HeroSection = () => {
    return (
        <section
            id="topo"
            className="grid items-start gap-10 lg:grid-cols-[1.05fr_.95fr]"
        >
            <motion.div {...fadeUp} className="space-y-6">
                <p className="inline-flex items-center gap-2 rounded-full bg-[var(--color-tertiary_10)] px-4 py-2 text-sm text-[var(--color-grays_100)]">
                    <CheckCircle2 className="h-4 w-4 text-[var(--color-tertiary)]" />
                    Plataforma para conectar jogadores por geolocalização
                </p>

                <h1 className="max-w-3xl">
                    <img
                        src="https://tableforge-bucket.s3.amazonaws.com/development/public/images/6bb3f68c-851e-4e91-bba1-3bc6e8e136d9.webp?v=1"
                        alt="TableForge Logo"
                        className="h-22 w-auto"
                    />
                    <span className="mt-3 block text-2xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                        Encontre jogadores de RPG, board games e TCG perto de você.
                    </span>
                </h1>

                <p className="max-w-xl text-lg text-[var(--color-grays_100)]">
                    O TableForge usa geolocalização e preferências de jogo para montar
                    partys com mais afinidade e facilitar encontros presenciais ou
                    online.
                </p>

                <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-xl border border-[var(--color-grays_500)] bg-[var(--color-primary)] px-4 py-3">
                        <p className="text-xs uppercase tracking-wide text-[var(--color-grays_200)]">
                            Missão
                        </p>
                        <p className="mt-1 text-sm font-semibold">Montar sua party ideal</p>
                    </div>
                    <div className="rounded-xl border border-[var(--color-grays_500)] bg-[var(--color-primary)] px-4 py-3">
                        <p className="text-xs uppercase tracking-wide text-[var(--color-grays_200)]">
                            Recompensa
                        </p>
                        <p className="mt-1 text-sm font-semibold">Acesso antecipado ao beta</p>
                    </div>
                    <div className="rounded-xl border border-[var(--color-grays_500)] bg-[var(--color-primary)] px-4 py-3">
                        <p className="text-xs uppercase tracking-wide text-[var(--color-grays_200)]">
                            Status
                        </p>
                        <p className="mt-1 text-sm font-semibold">Convites limitados</p>
                    </div>
                </div>

                <ul className="grid gap-3 text-sm text-[var(--color-grays_100)] sm:grid-cols-2">
                    <li className="flex items-center gap-2 rounded-xl border border-[var(--color-grays_500)] bg-[var(--color-primary)] px-3 py-2">
                        <MapPin className="h-4 w-4 text-[var(--color-tertiary)]" />
                        Busca por cidade, bairro e raio
                    </li>
                    <li className="flex items-center gap-2 rounded-xl border border-[var(--color-grays_500)] bg-[var(--color-primary)] px-3 py-2">
                        <SlidersHorizontal className="h-4 w-4 text-[var(--color-tertiary)]" />
                        Filtros por interesse e disponibilidade
                    </li>
                </ul>

                <div className="flex flex-wrap gap-3">
                    <a
                        href="#captura"
                        className="inline-flex items-center gap-2 rounded-full bg-[var(--color-tertiary)] px-6 py-3 text-sm font-semibold transition hover:bg-[var(--color-secondary)]"
                    >
                        Quero acesso antecipado
                        <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                        href="#recursos"
                        className="inline-flex items-center rounded-full border border-[var(--color-grays_300)] px-6 py-3 text-sm font-semibold text-[var(--color-grays_50)] transition hover:border-[var(--color-secondary)] hover:text-[var(--color-white)]"
                    >
                        Ver recursos do app
                    </a>
                </div>
            </motion.div>

            <LeadCaptureForm />
        </section>
    );
};
