"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../constants/transitions";
import { ForgeBand } from "../ui/forge-band";
import { SectionHeading } from "../ui/section-heading";
import { LeadCaptureForm } from "../lead-capture-form";

export const CtaSection = () => {
    return (
        <ForgeBand>
            <motion.div {...fadeUp} className="flex flex-col items-center">
                <SectionHeading
                    numeral="V"
                    kicker="Faça parte da Forja"
                    title="Pronto para forjar a sua próxima mesa?"
                    description="Seja você um Aventureiro de RPG, um Explorador de Tabuleiros e TCG, ou um Taverneiro (Lojista) com mesas prontas para jogo, este é o seu ecossistema. Entre na lista e garanta seu título de Fundador no acesso antecipado (Beta)."
                    align="center"
                />
                
                <div className="mt-12 w-full text-left">
                    <LeadCaptureForm />
                </div>
            </motion.div>
        </ForgeBand>
    );
};
