"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "../ui/button";

const LOGO_MARK_URL =
  "https://table-forge.s3.amazonaws.com/development/public/images/d4037d09-0893-4098-bc52-f94291c91c00.webp?v=1";
const LOGO_TEXT_URL =
  "https://table-forge.s3.amazonaws.com/development/public/images/6bb3f68c-851e-4e91-bba1-3bc6e8e136d9.webp?v=1";

const NAV_LINKS = [
  { href: "#para-aventureiros", label: "Para Aventureiros" },
  { href: "#como-funciona", label: "Como a Forja Funciona" },
  { href: "#espacos-lojas", label: "Espaços & Lojas" },
  { href: "#duvidas", label: "Dúvidas da Taverna" },
];

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="sticky top-0 z-40 w-full border-b border-[#1E1E1E] bg-[#000000]/90 backdrop-blur-md"
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-6 md:px-10">
        <a
          href="#topo"
          className="inline-flex items-center gap-2 drop-shadow-[0_0_18px_rgba(255,36,0,0.35)]"
        >
          <img src={LOGO_MARK_URL} alt="TableForge" className="h-12 w-auto" />
          <img
            src={LOGO_TEXT_URL}
            alt=""
            aria-hidden="true"
            className="hidden h-7 w-auto sm:block"
          />
        </a>

        <nav className="flex items-center gap-1 text-sm">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden px-3 py-1.5 chamfer-sm font-medium text-[#D1D1D1] transition-colors hover:bg-[#1E1E1E] hover:text-[#faf3e0] md:inline-flex"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink href="#captura" size="sm" className="ml-2">
            Quero acender a forja
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </nav>
      </div>
    </motion.header>
  );
};
