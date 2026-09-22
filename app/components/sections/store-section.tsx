"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { fadeUp } from "../../constants/transitions";
import { Badge } from "../ui/badge";
import { ButtonLink } from "../ui/button";
import { Card } from "../ui/card";
import { ForgeBand } from "../ui/forge-band";
import { SectionHeading } from "../ui/section-heading";
import { MugSpot, SealCalendarSpot, StoreSignSpot } from "../ui/spot-art";

const STORE_FEATURES = [
    {
        title: "Vitrine e Descoberta Local",
        description: "Apareça nas buscas por geolocalização quando mestres e grupos buscarem lugares estruturados para jogar.",
        Spot: StoreSignSpot,
    },
    {
        title: "Gestão de Reservas",
        description: "Receba pedidos de reserva de mesas com horário e número de pessoas, aprovando ou ajustando tudo pelo app.",
        Spot: SealCalendarSpot,
    },
    {
        title: "Eventos e Comunidade",
        description: "Divulgue torneios, noites de jogos de tabuleiro e eventos temáticos para participantes engajados da sua cidade.",
        Spot: MugSpot,
    },
];

export const StoreSection = () => {
    return (
        <ForgeBand id="lojas" className="scroll-mt-24">
            <motion.div {...fadeUp}>
                <SectionHeading
                    numeral="IV"
                    kicker="Para lojas, ludotecas e espaços geek"
                    title="Transforme mesas vazias em novas aventuras."
                    description="O TableForge coloca seu espaço físico diretamente no radar da comunidade. Mostre sua estrutura, gerencie solicitações de reserva e divulgue suas noites de board games e RPG para jogadores locais."
                />

                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {STORE_FEATURES.map(({ title, description, Spot }) => (
                        <Card key={title} className="space-y-4">
                            <Spot className="h-16 w-16" />
                            <h3 className="font-display text-base font-bold uppercase tracking-[0.04em] text-[#faf3e0]">{title}</h3>
                            <p className="text-sm leading-relaxed text-[#A1A1A1]">{description}</p>
                        </Card>
                    ))}
                </div>

                <Card className="mt-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                    <div className="space-y-3">
                        <Badge variant="primary" size="md">
                            <ShieldCheck className="h-3.5 w-3.5" />
                            Parceiro fundador
                        </Badge>
                        <p className="font-display text-base font-bold uppercase tracking-[0.04em] text-[#faf3e0]">
                            Programa de Parceiros Fundadores
                        </p>
                        <p className="text-xs leading-relaxed text-[#A1A1A1]">
                            Lojas cadastradas no acesso antecipado recebem selo exclusivo, suporte dedicado e destaque nas cidades-piloto.
                        </p>
                    </div>
                    <ButtonLink href="#captura" className="shrink-0">
                        Cadastrar meu espaço
                        <ArrowRight className="h-4 w-4" />
                    </ButtonLink>
                </Card>
            </motion.div>
        </ForgeBand>
    );
};
