"use client";

import { Header } from "./sections/header";
import { HeroSection } from "./sections/hero-section";
import { ForgeSparks } from "./ui/forge-sparks";
import { FeaturesSection } from "./sections/features-section";
import { HowItWorksSection } from "./sections/how-it-works-section";
import { StoreSection } from "./sections/store-section";
import { FaqSection } from "./sections/faq-section";
import { CtaSection } from "./sections/cta-section";
import { Footer } from "./sections/footer";

export const PageContent = () => {
    return (
        <main className="relative text-[#faf3e0]">
            <Header />
            <HeroSection />
            <ForgeSparks />
            <FeaturesSection />
            <HowItWorksSection />
            <StoreSection />
            <FaqSection />
            <CtaSection />
            <Footer />
        </main>
    );
};
