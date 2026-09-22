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


export const useLeadMissions = (formValues: Partial<ILeadForm>) => {
    const missions = useMemo(
        () => [
            { label: "Assine sua Alcunha (Nome)", done: (formValues.name?.trim()?.length ?? 0) > 1 },
            { label: "Informe seu Contato Mágico (E-mail)", done: (formValues.email?.trim()?.length ?? 0) > 4 },
            { label: "Mapeie seu Território (Cidade)", done: (formValues.city?.trim()?.length ?? 0) > 1 },
            { label: "Determine o Foco da Jornada (Interesse)", done: !!formValues.interest },
            { label: "Escolha sua Classe (Perfil)", done: !!formValues.archetype },
        ],
        [formValues]
    );

    const completedMissions = missions.filter((mission) => mission.done).length;
    const progress = Math.round((completedMissions / missions.length) * 100) || 0;
    
    const topText = FORGE_STATUS[completedMissions];
    const leftText = LEFT_TEXT[completedMissions];

    return { missions, progress, topText, leftText };
};
