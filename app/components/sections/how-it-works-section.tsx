"use client";

import { motion } from "framer-motion";
import { howItWorks } from "../../constants/how-it-works";
import { fadeUp } from "../../constants/transitions";
import { Card } from "../ui/card";
import { ForgeBand } from "../ui/forge-band";
import { SectionHeading } from "../ui/section-heading";

const STEP_NUMERALS = ["I", "II", "III"];

export const HowItWorksSection = () => {
    return (
        <ForgeBand id="como-funciona" className="scroll-mt-24">
            <motion.div {...fadeUp}>
                <SectionHeading
                    numeral="II"
                    kicker="Como funciona"
                    title="Da busca cansativa à mesa certa em três passos"
                    description="Um fluxo simples para sair da busca cansativa por jogadores e entrar em partidas com grupos mais alinhados ao seu estilo."
                />

                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {howItWorks.map((step, index) => (
                        <Card key={step.title} className="space-y-4">
                            <span className="inline-flex h-10 w-10 items-center justify-center chamfer-sm bg-[#ff2400] font-display text-sm font-bold text-[#faf3e0] shadow-[inset_0_1px_0_rgba(250,243,224,0.22),inset_0_-1px_0_rgba(0,0,0,0.35)]">
                                {STEP_NUMERALS[index]}
                            </span>
                            <h3 className="font-display text-base font-bold uppercase tracking-[0.04em] text-[#faf3e0]">
                                {step.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-[#A1A1A1]">{step.description}</p>
                        </Card>
                    ))}
                </div>
            </motion.div>
        </ForgeBand>
    );
};
