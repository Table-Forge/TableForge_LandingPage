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
        title: "Mapeie o seu Território",
        description:
            "Deslize pelas mesas de RPG da sua região até dar match com a sua próxima campanha, ou explore o mural de anúncios para as jogatinas de board games. Tudo filtrado por raio, bairro ou cidade.",
        Spot: CompassSpot,
    },
    {
        title: "RPG e Tabuleiros no mesmo Ecossistema",
        description:
            "O arsenal completo para organizar desde longas campanhas épicas de RPG até expedições estratégicas pelo mundo dos tabuleiros.",
        Spot: DieSpot,
    },
    {
        title: "Tavernas e Espaços Geek Parceiros",
        description:
            "Descubra as melhores lojas e espaços da sua região. Conheça a estrutura e reserve sua cadeira na mesa direto pelo app.",
        Spot: StoreSignSpot,
    },
    {
        title: "Reúna sua Party ou Encontre uma Mesa",
        description:
            "Conecte-se com Mestres, Exploradores e organizadores que compartilham os mesmos interesses e horários. Nenhuma aventura precisa ser solitária.",
        Spot: TableSpot,
    },
    {
        title: "Calendário de Eventos e Missões Locais",
        description:
            "Fique de olho no quadro de avisos da sua cidade. Acompanhe campeonatos de TCG, noites temáticas e encontros presenciais com facilidade.",
        Spot: SealCalendarSpot,
    },
    {
        title: "Chat Integrado para a sua Party",
        description:
            "Converse dentro da Forja. Alinhe regras, combine o formato da jogatina e tire dúvidas diretamente com seus parceiros de mesa ou Taverneiros.",
        Spot: ScrollSpot,
    },
];
