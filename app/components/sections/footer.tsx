import { Mail } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-12 rounded-3xl border border-[var(--color-grays_500)] bg-[var(--color-primary)] px-6 py-10 md:px-10">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-4 lg:col-span-2">
                    <img
                        src="https://tableforge-bucket.s3.amazonaws.com/development/public/images/6bb3f68c-851e-4e91-bba1-3bc6e8e136d9.webp?v=1"
                        alt="TableForge Logo"
                        className="h-12 w-auto"
                    />
                    <p className="max-w-xs text-sm text-[var(--color-grays_100)]">
                        Conectando jogadores, mestres e lojas físicas por geolocalização para RPG, Board Games e eventos. Forje sua mesa. Encontre sua comunidade.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="font-semibold text-[var(--color-white)]">Links</h3>
                    <ul className="space-y-2 text-sm text-[var(--color-grays_100)]">
                        <li>
                            <a href="#recursos" className="transition hover:text-[var(--color-tertiary)]">
                                Recursos
                            </a>
                        </li>
                        <li>
                            <a href="#como-funciona" className="transition hover:text-[var(--color-tertiary)]">
                                Como funciona
                            </a>
                        </li>
                        <li>
                            <a href="#lojas" className="transition hover:text-[var(--color-tertiary)]">
                                Para Lojas
                            </a>
                        </li>
                        <li>
                            <a href="#faq" className="transition hover:text-[var(--color-tertiary)]">
                                FAQ
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="font-semibold text-[var(--color-white)]">Contato</h3>
                    <ul className="space-y-2 text-sm text-[var(--color-grays_100)]">
                        <li className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-[var(--color-tertiary)]" />
                            <a href="mailto:contato@tableforge.com.br" className="transition hover:text-[var(--color-tertiary)]">
                                contato@tableforge.com.br
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-grays_500)] pt-6 text-xs text-[var(--color-grays_200)] md:flex-row">
                <p>&copy; {currentYear} TableForge. Todos os direitos reservados.</p>
                <div className="flex gap-4">
                    <a href="#" className="transition hover:text-[var(--color-white)]">
                        Termos de Uso
                    </a>
                    <a href="#" className="transition hover:text-[var(--color-white)]">
                        Política de Privacidade
                    </a>
                </div>
            </div>
        </footer>
    );
};
