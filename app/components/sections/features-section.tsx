"use client";

import { motion } from "framer-motion";
import { features } from "../../constants/features";
import { fadeUp } from "../../constants/transitions";
import { Card } from "../ui/card";
import { SectionHeading } from "../ui/section-heading";

export const FeaturesSection = () => {
    return (
        <motion.section id="recursos" {...fadeUp} className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 md:px-10">
            <SectionHeading
                numeral="I"
                kicker="Recursos da forja"
                title="Tudo o que a sua mesa precisa em um só lugar"
                description="Encontre pessoas, mesas e espaços por geolocalização e organize cada partida direto pelo app."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.35, delay: index * 0.08 }}
                    >
                        <Card className="flex gap-4">
                            <feature.Spot className="h-16 w-16 shrink-0" />
                            <div className="space-y-2">
                                <h3 className="font-display text-sm font-bold uppercase tracking-[0.06em] text-[#faf3e0]">
                                    {feature.title}
                                </h3>
                                <p className="text-xs leading-relaxed text-[#A1A1A1]">{feature.description}</p>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};
