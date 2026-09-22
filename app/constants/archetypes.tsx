import { CompassSpot, DieSpot, MasterScreenSpot, StoreSignSpot } from "../components/ui/spot-art";

export const archetypes = [
    {
        id: "jogador",
        name: "Jogador / Explorador",
        description: "Descubra novas mesas de RPG e grupos para jogar.",
        Spot: CompassSpot,
    },
    {
        id: "mestre",
        name: "Mestre / Narrador",
        description: "Organize campanhas, crie sessões e gerencie jogadores.",
        Spot: MasterScreenSpot,
    },
    {
        id: "boardgames",
        name: "Entusiasta de Board Games",
        description: "Focado em jogos de tabuleiro modernos e noites de jogos.",
        Spot: DieSpot,
    },
    {
        id: "lojista",
        name: "Lojista / Espaço Geek",
        description: "Divulgue suas mesas físicas, receba reservas e promova eventos.",
        Spot: StoreSignSpot,
    },
] as const;
