"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "../../constants/transitions";
import { LeadCaptureForm } from "../lead-capture-form";
import { ButtonLink } from "../ui/button";
import { Card } from "../ui/card";
import { KeystoneIcon } from "../ui/icons";
import { ForgeKicker } from "../ui/section-heading";

const HERO_PILLARS = [
  { label: "Missão", value: "Forjar mesas e reunir a party" },
  { label: "Loot", value: "Título de Ferreiro Fundador e acesso ao Beta" },
  { label: "A Guilda", value: "Aventureiros, Mestres e Tavernas" },
];

const HERO_HIGHLIGHTS = [
  "Campanhas de RPG e Exploração de Tabuleiros",
  "Reserva de lugares em Tavernas e Lojas parceiras",
  "Explore o território: busca por região e cidade",
  "Calendário de torneios e eventos geek",
];

export const HeroSection = () => {
  return (
    <section
      id="topo"
      className="mx-auto grid max-w-6xl items-start gap-10 px-6 pb-16 pt-12 md:px-10 lg:grid-cols-[1.05fr_.95fr] lg:pt-16"
    >
      <motion.div {...fadeUp} className="space-y-8">
        <ForgeKicker>
          A forja que conecta jogadores de RPG, board games e lojas locais
        </ForgeKicker>

        <h1 className="max-w-3xl space-y-4">
          <span className="block font-display text-3xl font-bold uppercase leading-[1.08] tracking-[0.02em] text-[#faf3e0] sm:text-4xl lg:text-5xl">
            Forje sua mesa.
            <span className="text-[#ff5a36]"> Encontre sua comunidade</span>.
          </span>
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-[#D1D1D1] sm:text-lg">
          Abra o mapa para a sua próxima aventura. Campanhas deRPG, partidas de
          board games, jogadores, eventos e lojas parceiras, tudo conectado em
          um único ecossistema.
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          {HERO_PILLARS.map((pillar) => (
            <Card key={pillar.label} padding="sm">
              <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ff5a36]">
                <KeystoneIcon
                  className="h-2.5 w-2.5 shrink-0 text-[#ff2400]"
                  aria-hidden="true"
                />
                {pillar.label}
              </p>
              <p className="mt-2 font-display text-sm font-bold uppercase tracking-[0.04em] text-[#faf3e0]">
                {pillar.value}
              </p>
            </Card>
          ))}
        </div>

        <ul className="grid gap-2 text-sm text-[#D1D1D1] sm:grid-cols-2">
          {HERO_HIGHLIGHTS.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <KeystoneIcon
                className="h-3 w-3 shrink-0 text-[#ff2400]"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3">
          <ButtonLink href="#captura" size="lg">
            Garantir meu lugar na Forja
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
          <ButtonLink href="#lojas" size="lg" variant="outline">
            Para Tavernas (Lojas Parceiras)
          </ButtonLink>
        </div>
      </motion.div>

      <LeadCaptureForm />
    </section>
  );
};
