"use client";

import { Header } from "./sections/header";
import { HeroSection } from "./sections/hero-section";
import { FeaturesSection } from "./sections/features-section";
import { HowItWorksSection } from "./sections/how-it-works-section";
import { HighlightsSection } from "./sections/highlights-section";
import { FaqSection } from "./sections/faq-section";
import { CtaSection } from "./sections/cta-section";
import { Footer } from "./sections/footer";

export const PageContent = () => {
    return (
        <main className="relative overflow-hidden bg-[var(--color-background)] text-[var(--color-white)]">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--color-secondary)] opacity-20 blur-3xl" />
                <div className="absolute bottom-8 left-8 h-64 w-64 rounded-full bg-[var(--color-tertiary)] opacity-10 blur-3xl" />
            </div>

            <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-20 pt-8 md:px-10">
                <Header />
                <HeroSection />
                <FeaturesSection />
                <HowItWorksSection />
                <HighlightsSection />
                <FaqSection />
                <CtaSection />
                <Footer />
            </div>
        </main>
    );
};