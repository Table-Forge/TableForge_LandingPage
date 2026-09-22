import { CompassSpot, DieSpot, MasterScreenSpot, StoreSignSpot, ScrollSpot } from "../components/ui/spot-art";

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
        id: "tcg",
        name: "Duelista / Colecionador (TCG)",
        description: "Acesse o mural de eventos para encontrar torneios, duelos e mesas de troca de cartas na sua região.",
        Spot: ScrollSpot,
    },
    {
        id: "lojista",
        name: "Taverneiro / Espaço Geek",
        description: "Transforme mesas vazias em lendas. Coloque sua loja no mapa, receba aventureiros, gerencie reservas e eventos.",
        Spot: StoreSignSpot,
    },
] as const;
