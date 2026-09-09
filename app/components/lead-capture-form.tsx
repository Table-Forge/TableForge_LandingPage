"use client";

import { motion } from "framer-motion";
import { Gamepad2, CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { archetypes } from "../constants/archetypes";
import { fadeUp } from "../constants/transitions";
import { LeadSchema, ILeadForm } from "../schemas/lead-schema";
import { useLeadMissions } from "../hooks/use-lead-missions";

type LeadStatus = "idle" | "loading" | "success" | "error";

export const LeadCaptureForm = () => {
    const [status, setStatus] = useState<LeadStatus>("idle");
    const [feedback, setFeedback] = useState("");

    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
        reset
    } = useForm<ILeadForm>({
        resolver: zodResolver(LeadSchema),
        defaultValues: {
            name: "",
            email: "",
            city: "",
            interest: "",
            archetype: "",
        },
        mode: "onChange"
    });

    const formValues = watch();
    const { missions, progress, xp, levelText } = useLeadMissions(formValues);

    async function onSubmit(data: ILeadForm) {
        setStatus("loading");
        setFeedback("");

        try {
            const response = await fetch("/api/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const resData = (await response.json()) as { message?: string };

            if (!response.ok) {
                throw new Error(resData.message || "Não foi possível concluir o cadastro.");
            }

            setStatus("success");
            setFeedback(
                resData.message || "Cadastro realizado. Você receberá as próximas novidades."
            );
            reset();
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
                Complete as missões abaixo para entrar na lista de acesso prioritário e parceiros fundadores.
            </p>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {missions.map((mission) => (
                    <div
                        key={mission.label}
                        className={`rounded-lg border px-3 py-2 text-xs ${mission.done
                            ? "border-[var(--color-secondary)]/60 bg-[var(--color-secondary)]/10 text-[var(--color-grays_50)]"
                            : "border-[var(--color-grays_500)] bg-[var(--color-background)] text-[var(--color-grays_200)]"
                            }`}
                    >
                        <span className="inline-flex items-center gap-1.5">
                            <CheckCircle2
                                className={`h-3.5 w-3.5 ${mission.done
                                    ? "text-[var(--color-secondary)]"
                                    : "text-[var(--color-grays_300)]"
                                    }`}
                            />
                            {mission.label}
                        </span>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-[var(--color-grays_100)]">
                        Nome ou Nome da Loja
                    </label>
                    <input
                        id="name"
                        {...register("name")}
                        className="w-full rounded-xl border border-[var(--color-grays_500)] bg-[var(--color-background)] px-4 py-3 text-sm outline-none transition focus:border-[var(--color-secondary)]"
                        placeholder="Seu nome ou da sua loja"
                    />
                    {errors.name && <span className="text-xs text-[var(--color-danger)]">{errors.name.message}</span>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-[var(--color-grays_100)]">
                        E-mail
                    </label>
                    <input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="w-full rounded-xl border border-[var(--color-grays_500)] bg-[var(--color-background)] px-4 py-3 text-sm outline-none transition focus:border-[var(--color-secondary)]"
                        placeholder="voce@email.com ou contato@sualoja.com"
                    />
                    {errors.email && <span className="text-xs text-[var(--color-danger)]">{errors.email.message}</span>}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                        <label htmlFor="city" className="text-sm text-[var(--color-grays_100)]">
                            Cidade
                        </label>
                        <input
                            id="city"
                            {...register("city")}
                            className="w-full rounded-xl border border-[var(--color-grays_500)] bg-[var(--color-background)] px-4 py-3 text-sm outline-none transition focus:border-[var(--color-secondary)]"
                            placeholder="Ex: Londrina, São Paulo..."
                        />
                        {errors.city && <span className="text-xs text-[var(--color-danger)]">{errors.city.message}</span>}
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
                            {...register("interest")}
                            className="w-full rounded-xl border border-[var(--color-grays_500)] bg-[var(--color-background)] px-4 py-3 text-sm outline-none transition focus:border-[var(--color-secondary)]"
                        >
                            <option value="" disabled>
                                Selecione
                            </option>
                            <option value="RPG">RPG (D&D, Tormenta, etc.)</option>
                            <option value="Board Games">Board Games (Jogos de Tabuleiro)</option>
                            <option value="Loja / Espaço Geek">Loja / Espaço Físico Geek</option>
                            <option value="TCG">TCG / Card Games</option>
                            <option value="Outros">Outros</option>
                        </select>
                        {errors.interest && <span className="text-xs text-[var(--color-danger)]">{errors.interest.message}</span>}
                    </div>
                </div>

                <div className="space-y-2">
                    <p className="text-sm text-[var(--color-grays_100)]">
                        Escolha seu perfil no ecossistema
                    </p>
                    <div className="grid gap-2">
                        <Controller
                            name="archetype"
                            control={control}
                            render={({ field }) => (
                                <>
                                    {archetypes.map((archetype) => {
                                        const Icon = archetype.icon;
                                        const selected = field.value === archetype.id;

                                        return (
                                            <button
                                                key={archetype.id}
                                                type="button"
                                                onClick={() => field.onChange(archetype.id)}
                                                className={`flex w-full items-start gap-3 rounded-xl border px-3 py-3 text-left transition ${selected
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
                                </>
                            )}
                        />
                        {errors.archetype && <span className="text-xs text-[var(--color-danger)]">{errors.archetype.message}</span>}
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
    );
};
