import { useMemo } from "react";
import { getLevel } from "../utils/get-level";
import { ILeadForm } from "../schemas/lead-schema";

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
    const xp = completedMissions * 20;
    const levelText = getLevel(progress);

    return { missions, completedMissions, progress, xp, levelText };
};
