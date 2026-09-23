"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../constants/transitions";
import { SectionHeading } from "../ui/section-heading";
import { LeadCaptureForm } from "../lead-capture-form";

export const CtaSection = () => {
    return (
        <motion.section
            {...fadeUp}
            className="mx-auto flex max-w-6xl flex-col items-center px-6 py-16 md:px-10 lg:py-24"
        >
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
        </motion.section>
    );
};
