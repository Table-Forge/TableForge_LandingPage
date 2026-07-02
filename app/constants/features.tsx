import { MapPin, Compass, Users, MessageCircle, CalendarDays, ShieldCheck, LucideIcon } from "lucide-react";


export type Feature = {
    title: string;
    description: string;
    icon: LucideIcon;
};

export const features: Feature[] = [
    {
        title: "Geolocalização por raio, bairro ou cidade",
        description:
            "Encontre jogadores perto de você com filtros por distância e disponibilidade.",
        icon: MapPin,
    },
    {
        title: "Match por interesse de jogo",
        description:
            "Conecte pessoas para RPG, board games, TCGs e outros jogos colaborativos.",
        icon: Compass,
    },
    {
        title: "Party pronta para jogar",
        description:
            "Monte grupos com perfil, nível e preferência de experiência em comum.",
        icon: Users,
    },
    {
        title: "Chat para combinar detalhes",
        description:
            "Converse no app para alinhar horário, local, regras e formato do encontro.",
        icon: MessageCircle,
    },
    {
        title: "Calendário de encontros",
        description:
            "Agende partidas presenciais ou online com lembretes e acompanhamento.",
        icon: CalendarDays,
    },
    {
        title: "Segurança e controle",
        description:
            "Gerencie informações e interações com recursos de privacidade e moderação.",
        icon: ShieldCheck,
    },
];
