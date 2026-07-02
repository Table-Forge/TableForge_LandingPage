"use client";

import { motion } from "framer-motion";
import { features } from "../../constants/features";
import { fadeUp } from "../../constants/transitions";

export const FeaturesSection = () => {
    return (
        <motion.section
            id="recursos"
            {...fadeUp}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
            {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                    <motion.article
                        key={feature.title}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.35, delay: index * 0.08 }}
                        className="rounded-2xl border border-[var(--color-grays_500)] bg-[var(--color-primary)] p-6"
                    >
                        <div className="mb-4 inline-flex rounded-xl bg-[var(--color-tertiary_10)] p-2.5">
                            <Icon className="h-5 w-5 text-[var(--color-tertiary)]" />
                        </div>
                        <h2 className="mb-2 text-xl font-semibold">{feature.title}</h2>
                        <p className="text-sm text-[var(--color-grays_100)]">
                            {feature.description}
                        </p>
                    </motion.article>
                );
            })}
        </motion.section>
    );
};
