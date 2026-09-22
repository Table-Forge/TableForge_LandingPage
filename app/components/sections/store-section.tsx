"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { fadeUp } from "../../constants/transitions";
import { Badge } from "../ui/badge";
import { ButtonLink } from "../ui/button";
import { Card } from "../ui/card";
import { ForgeBand } from "../ui/forge-band";
import { SectionHeading } from "../ui/section-heading";
import { MugSpot, SealCalendarSpot, StoreSignSpot } from "../ui/spot-art";

const STORE_FEATURES = [
  {
    title: "Destaque no Mapa Local",
    description:
      "Seja a \"Taverna\" oficial da sua região. Apareça no mapa da comunidade quando Mestres e grupos buscarem um lugar seguro e estruturado para jogar.",
    Spot: StoreSignSpot,
  },
  {
    title: "Gestão de Mesas e Reservas",
    description:
      "Receba os pedidos da party. Controle horários e o número de cadeiras, aprovando ou ajustando as reservas de forma simples diretamente pelo aplicativo.",
    Spot: SealCalendarSpot,
  },
  {
    title: "Mural de Eventos e Torneios",
    description:
      "Divulgue campeonatos, noites de board games e eventos especiais direto no mural do app, atraindo clientes reais e engajados para o seu espaço físico.",
    Spot: MugSpot,
  },
];

export const StoreSection = () => {
  return (
    <ForgeBand id="espacos-lojas" className="scroll-mt-24">
      <motion.div {...fadeUp}>
        <SectionHeading
          numeral="IV"
          kicker="Para Tavernas, Lojas e Espaços Geek"
          title="Transforme mesas vazias em novas aventuras."
          description="A Forja coloca o seu negócio diretamente no mapa da comunidade. Mostre a sua estrutura, gerencie o fluxo de reservas e anuncie suas jogatinas de board games, campanhas de RPG e noites de combate e troca de TCG para atrair o público local para dentro da sua loja."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {STORE_FEATURES.map(({ title, description, Spot }) => (
            <Card key={title} className="space-y-4">
              <Spot className="h-16 w-16" />
              <h3 className="font-display text-base font-bold uppercase tracking-[0.04em] text-[#faf3e0]">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-[#A1A1A1]">
                {description}
              </p>
            </Card>
          ))}
        </div>

        <Card className="mt-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="space-y-3">
            <Badge variant="primary" size="md">
              <ShieldCheck className="h-3.5 w-3.5" />
              Parceiro fundador
            </Badge>
            <p className="font-display text-base font-bold uppercase tracking-[0.04em] text-[#faf3e0]">
              Selo de Taverneiro Fundador
            </p>
            <p className="text-xs leading-relaxed text-[#A1A1A1]">
              Espaços cadastrados no acesso antecipado (Beta) recebem selo exclusivo de parceria, suporte direto da nossa equipe e destaque no mapa das cidades-piloto.
            </p>
          </div>
          <ButtonLink href="#captura" className="shrink-0">
            Cadastrar minha Taverna (Espaço)
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </Card>
      </motion.div>
    </ForgeBand>
  );
};
