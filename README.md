# TableForge Landing Page

Landing page oficial do **TableForge**, focada em:

- aquisicao de leads para o beta
- conversao de visitantes em usuarios
- SEO tecnico e conteudo orientado a busca
- experiencia gamificada no formulario de captura

## Visao Geral

O projeto foi construido para divulgar um app que conecta jogadores por geolocalizacao (RPG, board games, TCG e outros jogos colaborativos).  
A LP atual combina copy de conversao + elementos de gamificacao para aumentar conclusao do formulario.

## Stack

- **Next.js 16.2.1** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Lucide React**

## Funcionalidades Implementadas

### Landing gamificada

- barra de progresso da missao de cadastro
- sistema de XP e status de nivel
- checklist de missoes (nome, email, cidade, interesse, perfil gamer)
- escolha de arquetipo de jogador
- CTA dinamico com foco em conversao

### SEO

- metadata de pagina (title, description, keywords)
- Open Graph + Twitter Card
- JSON-LD (`SoftwareApplication` e `FAQPage`)
- `robots.txt` dinamico em `app/robots.ts`
- `sitemap.xml` dinamico em `app/sitemap.ts`
- `canonical` configurado

### Captura de leads

- endpoint `POST /api/leads`
- validacao basica de campos e email
- retorno de mensagens de sucesso/erro
- sink temporario via `console.info` (pronto para integrar CRM/DB)

## Estrutura de Pastas

```txt
app/
  api/leads/route.ts          # API de captura de leads
  components/landing-page.tsx # UI principal da LP
  globals.css                 # tema e variaveis de cor
  layout.tsx                  # metadata base e layout raiz
  page.tsx                    # pagina home + metadata + JSON-LD
  robots.ts                   # robots dinamico
  sitemap.ts                  # sitemap dinamico
```

## Requisitos

- Node.js **20.9+**
- npm, yarn, pnpm ou bun

## Como Rodar Localmente

1. Instale dependencias:

```bash
npm install
```

2. Crie um `.env.local` (opcional, recomendado):

```bash
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

3. Rode em modo desenvolvimento:

```bash
npm run dev
```

4. Acesse:

```txt
http://localhost:3000
```

## Scripts

- `npm run dev` inicia ambiente local
- `npm run lint` valida padrao de codigo
- `npm run build` gera build de producao
- `npm run start` sobe build gerada

## Endpoint de Leads

### `POST /api/leads`

Payload esperado:

```json
{
  "name": "Nome",
  "email": "email@exemplo.com",
  "city": "Sao Paulo",
  "interest": "RPG",
  "archetype": "explorador"
}
```

Resposta de sucesso:

- `201 Created`
- `{ "message": "Cadastro confirmado! ..." }`

## Personalizacao Rapida

Para adaptar a LP ao branding final:

1. Ajuste copy e seções em `app/components/landing-page.tsx`
2. Atualize paleta em `app/globals.css`
3. Revise metadata e palavras-chave em `app/page.tsx`
4. Defina dominio real em `NEXT_PUBLIC_SITE_URL`
5. Integre `app/api/leads/route.ts` com seu CRM ou banco

## Proximos Passos Recomendados

- integrar leads com Supabase, HubSpot ou RD Station
- configurar evento de conversao (GA4/Meta Pixel)
- criar testes A/B entre versao gamificada e versao classica
- adicionar pagina de termos e politica de privacidade

## Observacao Sobre Next.js

Este projeto usa **Next.js 16** com mudancas importantes em relacao a versoes antigas.  
Se precisar implementar algo novo, consulte a documentacao local em:

```txt
node_modules/next/dist/docs/
```
