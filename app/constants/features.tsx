import { MapPin, Dices, Store, Users, CalendarDays, MessageCircle, LucideIcon } from "lucide-react";

export type Feature = {
    title: string;
    description: string;
    icon: LucideIcon;
};

export const features: Feature[] = [
    {
        title: "Geolocalização por raio, bairro ou cidade",
        description:
            "Encontre jogadores, mesas de RPG e partidas de board games perto de você com filtros inteligentes.",
        icon: MapPin,
    },
    {
        title: "Board Games e RPG em um só lugar",
        description:
            "Suporte nativo para organizar tanto campanhas longas de RPG quanto encontros casuais de jogos de tabuleiro.",
        icon: Dices,
    },
    {
        title: "Lojas e Espaços Físicos Parceiros",
        description:
            "Descubra ludotecas e lojas geek na sua região, conheça a estrutura e solicite reserva de mesas no app.",
        icon: Store,
    },
    {
        title: "Encontre sua mesa ou monte seu grupo",
        description:
            "Conecte-se com mestres, jogadores e organizadores que compartilham dos mesmos interesses e horários.",
        icon: Users,
    },
    {
        title: "Eventos, Torneios e Calendário",
        description:
            "Acompanhe campeonatos, noites temáticas de jogos e encontros presenciais ou online com facilidade.",
        icon: CalendarDays,
    },
    {
        title: "Chat e Comunicação Integrada",
        description:
            "Converse no app para alinhar regras, formato da partida e tirar dúvidas direto com jogadores ou lojistas.",
        icon: MessageCircle,
    },
];
