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
                    title="Pronto para forjar sua próxima mesa?"
                    description="Seja você jogador de RPG, fã de board games ou dono de uma loja física geek, o TableForge é o seu ponto de encontro. Entre na lista e garanta seu acesso prioritário ao beta."
                    align="center"
                />
                <ButtonLink href="#captura" size="lg" className="mt-8">
                    Garantir acesso antecipado
                    <ArrowRight className="h-4 w-4" />
                </ButtonLink>
            </motion.div>
        </ForgeBand>
    );
};
