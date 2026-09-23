"use client";

import { motion } from "framer-motion";
import { faqs } from "../../constants/faqs";
import { fadeUp } from "../../constants/transitions";
import { ForgeDivider } from "../ui/forge-divider";
import { ForgeBand } from "../ui/forge-band";
import { KeystoneIcon } from "../ui/icons";
import { SectionHeading } from "../ui/section-heading";

export const FaqSection = () => {
    return (
        <ForgeBand id="faq" className="scroll-mt-24">
            <motion.div {...fadeUp}>
                <SectionHeading numeral="IV" kicker="Perguntas frequentes" title="Dúvidas da Taverna (FAQ)" />

                <ForgeDivider label="Pergaminho de respostas" className="my-8" />

                <div className="divide-y divide-[#1E1E1E] border-y border-[#1E1E1E]">
                    {faqs.map((item) => (
                        <details key={item.question} className="group py-4">
                            <summary className="flex cursor-pointer list-none items-center gap-3 font-display text-sm font-bold uppercase tracking-[0.04em] text-[#faf3e0] transition-colors hover:text-[#ff5a36] sm:text-base [&::-webkit-details-marker]:hidden">
                                <KeystoneIcon
                                    className="h-3 w-3 shrink-0 text-[#ff2400] transition-transform group-open:rotate-90"
                                    aria-hidden="true"
                                />
                                {item.question}
                            </summary>
                            <p className="mt-3 pl-6 text-sm leading-relaxed text-[#A1A1A1]">{item.answer}</p>
                        </details>
                    ))}
                </div>
            </motion.div>
        </ForgeBand>
    );
};
