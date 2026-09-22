import { useMemo } from "react";
import { ILeadForm } from "../schemas/lead-schema";

const FORGE_STATUS = [
    "Forja Fria",
    "Aquecendo...",
    "Aquecendo...",
    "Fogo Alto",
    "Em brasa",
    "Forja Acesa!"
];

const LEFT_TEXT = [
    "Preparando o carvão",
    "Acendendo o fogo",
    "Pegando a bigorna",
    "Posicionando o metal",
    "Aquecendo o aço",
    "Pronto para forjar"
];

const RIGHT_TEXT = [
    "Início da missão",
    "Primeira batida",
    "Primeira martelada",
    "Ganhando forma",
    "Últimos ajustes",
    "Obra-prima concluída"
];

export const useLeadMissions = (formValues: Partial<ILeadForm>) => {
    const missions = useMemo(
        () => [
            { label: "Definir nome", done: (formValues.name?.trim()?.length ?? 0) > 1 },
            { label: "Informar e-mail", done: (formValues.email?.trim()?.length ?? 0) > 4 },
            { label: "Escolher cidade", done: (formValues.city?.trim()?.length ?? 0) > 1 },
            { label: "Selecionar interesse", done: !!formValues.interest },
            { label: "Escolher seu perfil", done: !!formValues.archetype },
        ],
        [formValues]
    );

    const completedMissions = missions.filter((mission) => mission.done).length;
    const progress = Math.round((completedMissions / missions.length) * 100) || 0;
    
    const topText = FORGE_STATUS[completedMissions];
    const leftText = LEFT_TEXT[completedMissions];
    const rightText = RIGHT_TEXT[completedMissions];

    return { missions, progress, topText, leftText, rightText };
};
