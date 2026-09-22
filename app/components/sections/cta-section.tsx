"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "../../constants/transitions";
import { ButtonLink } from "../ui/button";
import { ForgeBand } from "../ui/forge-band";
import { SectionHeading } from "../ui/section-heading";

export const CtaSection = () => {
    return (
        <ForgeBand>
            <motion.div {...fadeUp} className="flex flex-col items-center">
                <SectionHeading
                    numeral="VI"
                    kicker="Faça parte da Forja"
                    title="Pronto para forjar a sua próxima mesa?"
                    description="Seja você um Aventureiro de RPG, um Explorador de Tabuleiros e TCG, ou um Taverneiro (Lojista) com mesas prontas para jogo, este é o seu ecossistema. Entre na lista e garanta seu título de Fundador no acesso antecipado (Beta)."
                    align="center"
                />
                <ButtonLink href="#captura" size="lg" className="mt-8">
                    Garantir meu lugar na Forja
                    <ArrowRight className="h-4 w-4" />
                </ButtonLink>
            </motion.div>
        </ForgeBand>
    );
};
