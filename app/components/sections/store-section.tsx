"use client";

import { motion } from "framer-motion";
import { Store, CalendarCheck, Users, ArrowRight, ShieldCheck } from "lucide-react";
import { fadeUp } from "../../constants/transitions";

export const StoreSection = () => {
    return (
        <motion.section
            id="lojas"
            {...fadeUp}
            className="rounded-3xl border border-[var(--color-tertiary_30)] bg-[var(--color-primary)] p-6 md:p-10"
        >
            <div className="max-w-3xl space-y-4">
                <p className="inline-flex items-center gap-2 rounded-full bg-[var(--color-tertiary_10)] px-4 py-2 text-sm font-semibold text-[var(--color-tertiary)]">
                    <Store className="h-4 w-4" />
                    Para Lojas, Ludotecas e Espaços Geek
                </p>
                <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                    Transforme mesas vazias em novas aventuras.
                </h2>
                <p className="text-base text-[var(--color-grays_100)] sm:text-lg">
                    O TableForge coloca seu espaço físico diretamente no radar da comunidade.
                    Mostre sua estrutura, gerencie solicitações de reserva e divulgue suas noites de
                    board games e RPG para jogadores locais.
                </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-[var(--color-grays_500)] bg-[var(--color-background)] p-5">
                    <div className="mb-4 inline-flex rounded-xl bg-[var(--color-tertiary_10)] p-2.5">
                        <Store className="h-5 w-5 text-[var(--color-tertiary)]" />
                    </div>
                    <h3 className="text-lg font-semibold">Vitrine e Descoberta Local</h3>
                    <p className="mt-2 text-sm text-[var(--color-grays_100)]">
                        Apareça nas buscas por geolocalização quando mestres e grupos buscarem lugares estruturados para jogar.
                    </p>
                </div>

                <div className="rounded-2xl border border-[var(--color-grays_500)] bg-[var(--color-background)] p-5">
                    <div className="mb-4 inline-flex rounded-xl bg-[var(--color-tertiary_10)] p-2.5">
                        <CalendarCheck className="h-5 w-5 text-[var(--color-tertiary)]" />
                    </div>
                    <h3 className="text-lg font-semibold">Gestão de Reservas</h3>
                    <p className="mt-2 text-sm text-[var(--color-grays_100)]">
                        Receba pedidos de reserva de mesas com horário e número de pessoas, aprovando ou ajustando tudo pelo app.
                    </p>
                </div>

                <div className="rounded-2xl border border-[var(--color-grays_500)] bg-[var(--color-background)] p-5">
                    <div className="mb-4 inline-flex rounded-xl bg-[var(--color-tertiary_10)] p-2.5">
                        <Users className="h-5 w-5 text-[var(--color-tertiary)]" />
                    </div>
                    <h3 className="text-lg font-semibold">Eventos e Comunidade</h3>
                    <p className="mt-2 text-sm text-[var(--color-grays_100)]">
                        Divulgue torneios, noites de jogos de tabuleiro e eventos temáticos para participantes engajados da sua cidade.
                    </p>
                </div>
            </div>

            <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-[var(--color-secondary)]/40 bg-[var(--color-secondary)]/10 p-5 sm:flex-row sm:items-center">
                <div className="space-y-1">
                    <p className="inline-flex items-center gap-2 font-semibold text-[var(--color-white)]">
                        <ShieldCheck className="h-4 w-4 text-[var(--color-tertiary)]" />
                        Programa de Parceiros Fundadores
                    </p>
                    <p className="text-xs text-[var(--color-grays_100)]">
                        Lojas cadastradas no acesso antecipado recebem selo exclusivo, suporte dedicado e destaque nas cidades-piloto.
                    </p>
                </div>
                <a
                    href="#captura"
                    className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[var(--color-tertiary)] px-5 py-2.5 text-sm font-semibold transition hover:bg-[var(--color-secondary)]"
                >
                    Cadastrar meu espaço
                    <ArrowRight className="h-4 w-4" />
                </a>
            </div>
        </motion.section>
    );
};
