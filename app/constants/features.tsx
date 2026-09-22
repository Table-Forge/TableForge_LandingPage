import type { ComponentType } from "react";
import type { ISpotArt } from "../components/ui/spot-art";
import { CompassSpot, DieSpot, ScrollSpot, SealCalendarSpot, StoreSignSpot, TableSpot } from "../components/ui/spot-art";

export type Feature = {
    title: string;
    description: string;
    Spot: ComponentType<ISpotArt>;
};

export const features: Feature[] = [
    {
        title: "Geolocalização por raio, bairro ou cidade",
        description:
            "Encontre jogadores, mesas de RPG e partidas de board games perto de você com filtros inteligentes.",
        Spot: CompassSpot,
    },
    {
        title: "Board Games e RPG em um só lugar",
        description:
            "Suporte nativo para organizar tanto campanhas longas de RPG quanto encontros casuais de jogos de tabuleiro.",
        Spot: DieSpot,
    },
    {
        title: "Lojas e Espaços Físicos Parceiros",
        description:
            "Descubra ludotecas e lojas geek na sua região, conheça a estrutura e solicite reserva de mesas no app.",
        Spot: StoreSignSpot,
    },
    {
        title: "Encontre sua mesa ou monte seu grupo",
        description:
            "Conecte-se com mestres, jogadores e organizadores que compartilham dos mesmos interesses e horários.",
        Spot: TableSpot,
    },
    {
        title: "Eventos, Torneios e Calendário",
        description:
            "Acompanhe campeonatos, noites temáticas de jogos e encontros presenciais ou online com facilidade.",
        Spot: SealCalendarSpot,
    },
    {
        title: "Chat e Comunicação Integrada",
        description:
            "Converse no app para alinhar regras, formato da partida e tirar dúvidas direto com jogadores ou lojistas.",
        Spot: ScrollSpot,
    },
];
