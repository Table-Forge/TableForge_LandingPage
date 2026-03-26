"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Compass,
  Flame,
  Gamepad2,
  MapPin,
  MessageCircle,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Star,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";
import { type FormEvent, useMemo, useState } from "react";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Geolocalização por raio, bairro ou cidade",
    description:
      "Encontre jogadores perto de você com filtros por distância e disponibilidade.",
    icon: MapPin,
  },
  {
    title: "Match por interesse de jogo",
    description:
      "Conecte pessoas para RPG, board games, TCGs e outros jogos colaborativos.",
    icon: Compass,
  },
  {
    title: "Party pronta para jogar",
    description:
      "Monte grupos com perfil, nível e preferência de experiência em comum.",
    icon: Users,
  },
  {
    title: "Chat para combinar detalhes",
    description:
      "Converse no app para alinhar horário, local, regras e formato do encontro.",
    icon: MessageCircle,
  },
  {
    title: "Calendário de encontros",
    description:
      "Agende partidas presenciais ou online com lembretes e acompanhamento.",
    icon: CalendarDays,
  },
  {
    title: "Segurança e controle",
    description:
      "Gerencie informações e interações com recursos de privacidade e moderação.",
    icon: ShieldCheck,
  },
];

const howItWorks = [
  {
    title: "Crie seu perfil de jogador",
    description:
      "Informe seus jogos favoritos, estilo de partida e quando você costuma jogar.",
  },
  {
    title: "Defina filtros inteligentes",
    description:
      "Ajuste raio de busca, cidade, bairro e preferências para achar pessoas compatíveis.",
  },
  {
    title: "Entre em uma party e marque o jogo",
    description:
      "Use o chat, confirme no calendário e jogue com grupos mais alinhados ao seu perfil.",
  },
];

const faqs = [
  {
    question: "Como encontrar jogadores de RPG perto de mim?",
    answer:
      "Com o TableForge, você define sua localização e um raio de alcance para descobrir jogadores e grupos na sua região.",
  },
  {
    question: "O app funciona para board games e TCG?",
    answer:
      "Sim. O sistema foi pensado para RPG, board games, trading card games e outros formatos colaborativos.",
  },
  {
    question: "Posso organizar encontros presenciais e online?",
    answer:
      "Pode. Você cria encontros, combina detalhes no chat e agenda tudo pelo calendário integrado.",
  },
  {
    question: "Como a segurança das interações é tratada?",
    answer:
      "A plataforma inclui mecanismos para gerenciamento seguro de perfis, informações e interações entre usuários.",
  },
];

const archetypes = [
  {
    id: "explorador",
    name: "Explorador",
    description: "Curte descobrir novas mesas e grupos.",
    icon: Compass,
  },
  {
    id: "estrategista",
    name: "Estrategista",
    description: "Gosta de organizar sessões e montar campanhas.",
    icon: Trophy,
  },
  {
    id: "competitivo",
    name: "Competitivo",
    description: "Busca partidas intensas e evolução constante.",
    icon: Flame,
  },
] as const;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

type LeadStatus = "idle" | "loading" | "success" | "error";
type FormValues = {
  name: string;
  email: string;
  city: string;
  interest: string;
  archetype: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  city: "",
  interest: "",
  archetype: "",
};

function getLevel(progress: number) {
  if (progress === 100) return "Lenda desbloqueada";
  if (progress >= 75) return "Elite em formação";
  if (progress >= 50) return "Aventureiro experiente";
  if (progress >= 25) return "Recruta promissor";
  return "Início da missão";
}

export function LandingPage() {
  const [status, setStatus] = useState<LeadStatus>("idle");
  const [feedback, setFeedback] = useState("");
  const [formValues, setFormValues] = useState<FormValues>(initialValues);

  const missions = useMemo(
    () => [
      { label: "Definir nome", done: formValues.name.trim().length > 1 },
      { label: "Informar e-mail", done: formValues.email.trim().length > 4 },
      { label: "Escolher cidade", done: formValues.city.trim().length > 1 },
      { label: "Selecionar interesse", done: formValues.interest !== "" },
      { label: "Escolher perfil gamer", done: formValues.archetype !== "" },
    ],
    [formValues]
  );

  const completedMissions = missions.filter((mission) => mission.done).length;
  const progress = Math.round((completedMissions / missions.length) * 100);
  const xp = completedMissions * 20;
  const levelText = getLevel(progress);

  function updateField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setFormValues((current) => ({ ...current, [field]: value }));
  }

  async function handleLeadSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Não foi possível concluir o cadastro.");
      }

      setStatus("success");
      setFeedback(
        data.message || "Cadastro realizado. Você receberá as próximas novidades."
      );
      setFormValues(initialValues);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Erro inesperado ao enviar seus dados."
      );
    }
  }

  return (
    <main className="relative overflow-hidden bg-[var(--color-background)] text-[var(--color-white)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--color-secondary)] opacity-20 blur-3xl" />
        <div className="absolute bottom-8 left-8 h-64 w-64 rounded-full bg-[var(--color-tertiary)] opacity-10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-20 pt-8 md:px-10">
        <motion.header
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-between gap-4"
        >
          <a
            href="#topo"
            className="inline-flex items-center gap-3 rounded-2xl border border-[var(--color-tertiary_30)] bg-[var(--color-primary)] px-5 py-3 shadow-lg shadow-[var(--color-black)]/20"
          >
            <span className="rounded-xl bg-[var(--color-tertiary_10)] p-2">
              <Sparkles className="h-5 w-5 text-[var(--color-tertiary)]" />
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-black tracking-[0.14em] text-[var(--color-white)] sm:text-xl">
                TABLEFORGE
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--color-grays_100)] sm:text-[11px]">
                Modo Missão Ativo
              </span>
            </span>
          </a>

          <nav className="flex flex-wrap items-center gap-2 text-sm">
            <a
              href="#recursos"
              className="rounded-full border border-transparent px-3 py-2 text-[var(--color-grays_100)] transition hover:border-[var(--color-grays_400)] hover:text-[var(--color-white)]"
            >
              Recursos
            </a>
            <a
              href="#como-funciona"
              className="rounded-full border border-transparent px-3 py-2 text-[var(--color-grays_100)] transition hover:border-[var(--color-grays_400)] hover:text-[var(--color-white)]"
            >
              Como funciona
            </a>
            <a
              href="#faq"
              className="rounded-full border border-transparent px-3 py-2 text-[var(--color-grays_100)] transition hover:border-[var(--color-grays_400)] hover:text-[var(--color-white)]"
            >
              FAQ
            </a>
            <a
              href="#captura"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-tertiary)] px-4 py-2 font-semibold text-[var(--color-white)] transition hover:bg-[var(--color-secondary)]"
            >
              Entrar no beta
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </motion.header>

        <section
          id="topo"
          className="grid items-start gap-10 lg:grid-cols-[1.05fr_.95fr]"
        >
          <motion.div {...fadeUp} className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-[var(--color-tertiary_10)] px-4 py-2 text-sm text-[var(--color-grays_100)]">
              <CheckCircle2 className="h-4 w-4 text-[var(--color-tertiary)]" />
              Plataforma para conectar jogadores por geolocalização
            </p>

            <h1 className="max-w-3xl">
              <span className="block text-5xl font-black leading-none tracking-tight text-[var(--color-white)] sm:text-6xl lg:text-7xl">
                TableForge
              </span>
              <span className="mt-3 block text-2xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Encontre jogadores de RPG, board games e TCG perto de você.
              </span>
            </h1>

            <p className="max-w-xl text-lg text-[var(--color-grays_100)]">
              O TableForge usa geolocalização e preferências de jogo para montar
              partys com mais afinidade e facilitar encontros presenciais ou
              online.
            </p>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-[var(--color-grays_500)] bg-[var(--color-primary)] px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-[var(--color-grays_200)]">
                  Missão
                </p>
                <p className="mt-1 text-sm font-semibold">Montar sua party ideal</p>
              </div>
              <div className="rounded-xl border border-[var(--color-grays_500)] bg-[var(--color-primary)] px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-[var(--color-grays_200)]">
                  Recompensa
                </p>
                <p className="mt-1 text-sm font-semibold">Acesso antecipado ao beta</p>
              </div>
              <div className="rounded-xl border border-[var(--color-grays_500)] bg-[var(--color-primary)] px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-[var(--color-grays_200)]">
                  Status
                </p>
                <p className="mt-1 text-sm font-semibold">Convites limitados</p>
              </div>
            </div>

            <ul className="grid gap-3 text-sm text-[var(--color-grays_100)] sm:grid-cols-2">
              <li className="flex items-center gap-2 rounded-xl border border-[var(--color-grays_500)] bg-[var(--color-primary)] px-3 py-2">
                <MapPin className="h-4 w-4 text-[var(--color-tertiary)]" />
                Busca por cidade, bairro e raio
              </li>
              <li className="flex items-center gap-2 rounded-xl border border-[var(--color-grays_500)] bg-[var(--color-primary)] px-3 py-2">
                <SlidersHorizontal className="h-4 w-4 text-[var(--color-tertiary)]" />
                Filtros por interesse e disponibilidade
              </li>
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href="#captura"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-tertiary)] px-6 py-3 text-sm font-semibold transition hover:bg-[var(--color-secondary)]"
              >
                Quero acesso antecipado
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#recursos"
                className="inline-flex items-center rounded-full border border-[var(--color-grays_300)] px-6 py-3 text-sm font-semibold text-[var(--color-grays_50)] transition hover:border-[var(--color-secondary)] hover:text-[var(--color-white)]"
              >
                Ver recursos do app
              </a>
            </div>
          </motion.div>

          <motion.aside
            id="captura"
            {...fadeUp}
            className="rounded-3xl border border-[var(--color-secondary)]/30 bg-[var(--color-primary)] p-6 shadow-2xl shadow-[var(--color-black)]/20"
          >
            <div className="mb-4 rounded-2xl border border-[var(--color-grays_500)] bg-[var(--color-background)] p-4">
              <div className="mb-3 flex items-center justify-between text-sm">
                <p className="inline-flex items-center gap-2 font-semibold">
                  <Gamepad2 className="h-4 w-4 text-[var(--color-tertiary)]" />
                  Missão de Entrada
                </p>
                <p className="text-[var(--color-grays_100)]">{xp} XP</p>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-[var(--color-grays_500)]">
                <motion.div
                  className="h-full rounded-full bg-[var(--color-tertiary)]"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-[var(--color-grays_100)]">
                <span>{progress}% completo</span>
                <span>{levelText}</span>
              </div>
            </div>

            <h2 className="text-2xl font-semibold">Receba acesso ao beta</h2>
            <p className="mt-2 text-sm text-[var(--color-grays_100)]">
              Complete as missões abaixo e entre na lista de usuários
              prioritários.
            </p>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {missions.map((mission) => (
                <div
                  key={mission.label}
                  className={`rounded-lg border px-3 py-2 text-xs ${
                    mission.done
                      ? "border-[var(--color-secondary)]/60 bg-[var(--color-secondary)]/10 text-[var(--color-grays_50)]"
                      : "border-[var(--color-grays_500)] bg-[var(--color-background)] text-[var(--color-grays_200)]"
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2
                      className={`h-3.5 w-3.5 ${
                        mission.done
                          ? "text-[var(--color-secondary)]"
                          : "text-[var(--color-grays_300)]"
                      }`}
                    />
                    {mission.label}
                  </span>
                </div>
              ))}
            </div>

            <form onSubmit={handleLeadSubmit} className="mt-6 space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-[var(--color-grays_100)]">
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  value={formValues.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className="w-full rounded-xl border border-[var(--color-grays_500)] bg-[var(--color-background)] px-4 py-3 text-sm outline-none transition focus:border-[var(--color-secondary)]"
                  placeholder="Seu nome"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-[var(--color-grays_100)]">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formValues.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className="w-full rounded-xl border border-[var(--color-grays_500)] bg-[var(--color-background)] px-4 py-3 text-sm outline-none transition focus:border-[var(--color-secondary)]"
                  placeholder="voce@email.com"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="city" className="text-sm text-[var(--color-grays_100)]">
                    Cidade
                  </label>
                  <input
                    id="city"
                    name="city"
                    required
                    value={formValues.city}
                    onChange={(event) => updateField("city", event.target.value)}
                    className="w-full rounded-xl border border-[var(--color-grays_500)] bg-[var(--color-background)] px-4 py-3 text-sm outline-none transition focus:border-[var(--color-secondary)]"
                    placeholder="Ex: São Paulo"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="interest"
                    className="text-sm text-[var(--color-grays_100)]"
                  >
                    Interesse principal
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formValues.interest}
                    onChange={(event) => updateField("interest", event.target.value)}
                    className="w-full rounded-xl border border-[var(--color-grays_500)] bg-[var(--color-background)] px-4 py-3 text-sm outline-none transition focus:border-[var(--color-secondary)]"
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    <option value="RPG">RPG</option>
                    <option value="Board Games">Board Games</option>
                    <option value="TCG">TCG</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-[var(--color-grays_100)]">
                  Escolha seu perfil gamer
                </p>
                <div className="grid gap-2">
                  {archetypes.map((archetype) => {
                    const Icon = archetype.icon;
                    const selected = formValues.archetype === archetype.id;

                    return (
                      <button
                        key={archetype.id}
                        type="button"
                        onClick={() => updateField("archetype", archetype.id)}
                        className={`flex w-full items-start gap-3 rounded-xl border px-3 py-3 text-left transition ${
                          selected
                            ? "border-[var(--color-secondary)] bg-[var(--color-secondary)]/10"
                            : "border-[var(--color-grays_500)] bg-[var(--color-background)] hover:border-[var(--color-grays_300)]"
                        }`}
                      >
                        <Icon className="mt-0.5 h-4 w-4 text-[var(--color-tertiary)]" />
                        <span>
                          <span className="block text-sm font-semibold">
                            {archetype.name}
                          </span>
                          <span className="block text-xs text-[var(--color-grays_100)]">
                            {archetype.description}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-tertiary)] px-5 py-3 text-sm font-semibold transition hover:bg-[var(--color-secondary)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading"
                  ? "Enviando..."
                  : progress === 100
                    ? "Desbloquear meu convite"
                    : "Completar missão e entrar na lista"}
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="text-xs text-[var(--color-grays_200)]">
                Ao enviar, você concorda em receber comunicações sobre o beta e
                lançamento do app.
              </p>

              {status !== "idle" && feedback ? (
                <p
                  className={
                    status === "success"
                      ? "rounded-lg border border-[var(--color-secondary)]/50 bg-[var(--color-secondary)]/10 px-3 py-2 text-sm text-[var(--color-grays_50)]"
                      : "rounded-lg border border-[var(--color-danger)]/50 bg-[var(--color-danger)]/10 px-3 py-2 text-sm text-[var(--color-grays_50)]"
                  }
                >
                  {feedback}
                </p>
              ) : null}
            </form>
          </motion.aside>
        </section>

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

        <motion.section
          id="como-funciona"
          {...fadeUp}
          className="rounded-3xl border border-[var(--color-grays_500)] bg-[var(--color-primary)] p-6 md:p-8"
        >
          <h2 className="text-3xl font-semibold">Como funciona o TableForge</h2>
          <p className="mt-2 max-w-2xl text-[var(--color-grays_100)]">
            Um fluxo simples para sair da busca cansativa por jogadores e entrar
            em partidas com grupos mais alinhados ao seu estilo.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {howItWorks.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-[var(--color-grays_500)] bg-[var(--color-background)] p-5"
              >
                <p className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-tertiary)] text-sm font-semibold">
                  {index + 1}
                </p>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-grays_100)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          {...fadeUp}
          className="grid gap-4 rounded-3xl border border-[var(--color-grays_500)] bg-[var(--color-primary)] p-6 md:grid-cols-3"
        >
          <div className="rounded-2xl border border-[var(--color-grays_500)] bg-[var(--color-background)] p-4">
            <p className="inline-flex items-center gap-2 text-sm font-semibold">
              <Flame className="h-4 w-4 text-[var(--color-tertiary)]" />
              Multiplicador de engajamento
            </p>
            <p className="mt-2 text-sm text-[var(--color-grays_100)]">
              Experiência de cadastro mais divertida e menos burocrática.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--color-grays_500)] bg-[var(--color-background)] p-4">
            <p className="inline-flex items-center gap-2 text-sm font-semibold">
              <Star className="h-4 w-4 text-[var(--color-tertiary)]" />
              Recompensa clara
            </p>
            <p className="mt-2 text-sm text-[var(--color-grays_100)]">
              Usuário entende rápido o valor: acesso antecipado e prioridade no
              beta.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--color-grays_500)] bg-[var(--color-background)] p-4">
            <p className="inline-flex items-center gap-2 text-sm font-semibold">
              <Trophy className="h-4 w-4 text-[var(--color-tertiary)]" />
              Conversão orientada por progresso
            </p>
            <p className="mt-2 text-sm text-[var(--color-grays_100)]">
              Barra de missão e XP incentivam conclusão do formulário.
            </p>
          </div>
        </motion.section>

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

        <motion.section
          {...fadeUp}
          className="rounded-3xl border border-[var(--color-tertiary_30)] bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-background)] to-[var(--color-primary)] px-6 py-10 text-center md:px-10"
        >
          <div className="mx-auto max-w-2xl space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-[var(--color-tertiary_10)] px-4 py-2 text-sm text-[var(--color-grays_100)]">
              <CheckCircle2 className="h-4 w-4 text-[var(--color-tertiary)]" />
              Pronto para receber os primeiros usuários?
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Leve sua comunidade de jogadores para o próximo nível.
            </h2>
            <p className="text-[var(--color-grays_100)]">
              Entre na lista e seja avisado quando abrirmos novos convites para
              o beta do TableForge.
            </p>
            <a
              href="#captura"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-tertiary)] px-6 py-3 font-semibold transition hover:bg-[var(--color-secondary)]"
            >
              Quero meu convite
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
