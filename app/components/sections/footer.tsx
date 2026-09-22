import type { ReactNode } from "react";
import { Heart, Mail } from "lucide-react";
import { ForgeDivider } from "../ui/forge-divider";
import { KeystoneIcon } from "../ui/icons";

const LOGO_TEXT_URL =
    "https://table-forge.s3.amazonaws.com/development/public/images/6bb3f68c-851e-4e91-bba1-3bc6e8e136d9.webp?v=1";

const FOOTER_LINKS = [
    { href: "#recursos", label: "Recursos" },
    { href: "#como-funciona", label: "Como funciona" },
    { href: "#lojas", label: "Para Lojas" },
    { href: "#faq", label: "FAQ" },
];

const LEGAL_LINKS = [
    { href: "#", label: "Termos de Uso" },
    { href: "#", label: "Política de Privacidade" },
];

interface IFooterHeading {
    children: ReactNode;
}

function FooterHeading({ children }: IFooterHeading) {
    return (
        <h3 className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#faf3e0]">
            <KeystoneIcon className="h-3 w-3 text-[#ff2400]" aria-hidden="true" />
            {children}
        </h3>
    );
}

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="stone-pattern relative mt-auto border-t border-[#2D2D2D] text-[#D1D1D1]">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_30%,rgba(0,0,0,0.75)_100%)]"
            />
            <div className="relative mx-auto max-w-6xl px-6 py-12 md:px-10 lg:py-16">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4 lg:col-span-2">
                        <a href="#topo" className="inline-block drop-shadow-[0_0_18px_rgba(255,36,0,0.35)]">
                            <img src={LOGO_TEXT_URL} alt="TableForge" className="h-10 w-auto" />
                        </a>
                        <p className="max-w-xs text-xs leading-relaxed text-[#A1A1A1]">
                            Conectando jogadores, mestres e lojas físicas por geolocalização para RPG, Board Games e eventos. Forje sua mesa. Encontre sua comunidade.
                        </p>
                    </div>

                    <div>
                        <FooterHeading>Links</FooterHeading>
                        <ul className="space-y-2 text-xs">
                            {FOOTER_LINKS.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className="transition-colors hover:text-[#faf3e0]">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <FooterHeading>Contato</FooterHeading>
                        <ul className="space-y-2 text-xs">
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-[#ff2400]" />
                                <a href="mailto:contato@tableforge.com.br" className="transition-colors hover:text-[#faf3e0]">
                                    contato@tableforge.com.br
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <ForgeDivider label="TableForge" className="mt-12" />

                <div className="mt-6 flex flex-col items-center justify-between gap-4 text-xs text-[#717171] sm:flex-row">
                    <p>&copy; {currentYear} TableForge. Todos os direitos reservados.</p>
                    <p className="flex items-center gap-1">
                        Forjado com <Heart className="h-3.5 w-3.5 fill-[#ff2400] text-[#ff2400]" /> para a comunidade de RPG e jogos de mesa.
                    </p>
                    <div className="flex items-center gap-4">
                        {LEGAL_LINKS.map((link) => (
                            <a key={link.label} href={link.href} className="transition-colors hover:text-[#faf3e0]">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
