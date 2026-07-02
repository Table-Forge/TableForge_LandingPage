
import { Compass, Trophy, Flame } from "lucide-react";

export const archetypes = [
    {
        id: "explorador",
        name: "Explorador",
        description: "Curte descobrir novas mesas e grupos.",
        icon: Compass,
    },
    {
        id: "estrategista",
        name: "Estrategista",
        description: "Gosta de organizar sessões e montar campanhas.",
        icon: Trophy,
    },
    {
        id: "competitivo",
        name: "Competitivo",
        description: "Busca partidas intensas e evolução constante.",
        icon: Flame,
    },
] as const;