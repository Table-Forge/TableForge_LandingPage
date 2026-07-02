"use client";

import { motion } from "framer-motion";
import { faqs } from "../../constants/faqs";
import { fadeUp } from "../../constants/transitions";

export const FaqSection = () => {
    return (
        <motion.section id="faq" {...fadeUp} className="space-y-4">
            <h2 className="text-3xl font-semibold">Perguntas frequentes</h2>
            <div className="space-y-3">
                {faqs.map((item) => (
                    <details
                        key={item.question}
                        className="rounded-2xl border border-[var(--color-grays_500)] bg-[var(--color-primary)] p-5"
                    >
                        <summary className="cursor-pointer text-lg font-semibold">
                            {item.question}
                        </summary>
                        <p className="mt-3 text-sm text-[var(--color-grays_100)]">
                            {item.answer}
                        </p>
                    </details>
                ))}
            </div>
        </motion.section>
    );
};
