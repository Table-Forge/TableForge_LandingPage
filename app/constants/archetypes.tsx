
import { Compass, Trophy, Dices, Store } from "lucide-react";

export const archetypes = [
    {
        id: "jogador",
        name: "Jogador / Explorador",
        description: "Descubra novas mesas de RPG e grupos para jogar.",
        icon: Compass,
    },
    {
        id: "mestre",
        name: "Mestre / Narrador",
        description: "Organize campanhas, crie sessões e gerencie jogadores.",
        icon: Trophy,
    },
    {
        id: "boardgames",
        name: "Entusiasta de Board Games",
        description: "Focado em jogos de tabuleiro modernos e noites de jogos.",
        icon: Dices,
    },
    {
        id: "lojista",
        name: "Lojista / Espaço Geek",
        description: "Divulgue suas mesas físicas, receba reservas e promova eventos.",
        icon: Store,
    },
] as const;