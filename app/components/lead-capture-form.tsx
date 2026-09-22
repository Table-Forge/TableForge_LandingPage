"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { archetypes } from "../constants/archetypes";
import { fadeUp } from "../constants/transitions";
import { ILeadForm, LeadSchema } from "../schemas/lead-schema";
import { useLeadMissions } from "../hooks/use-lead-missions";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { KeystoneIcon } from "./ui/icons";

type LeadStatus = "idle" | "loading" | "success" | "error";

const fieldStyles =
  "w-full rounded-lg border border-[#2D2D2D] bg-[#0b0b0d] px-4 py-3 text-sm text-[#faf3e0] outline-none transition-colors placeholder:text-[#717171] focus:border-[#ff2400]";
const labelStyles = "text-sm text-[#D1D1D1]";
const errorStyles = "text-xs text-[#ff5a36]";

export const LeadCaptureForm = () => {
  const [status, setStatus] = useState<LeadStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ILeadForm>({
    resolver: zodResolver(LeadSchema),
    defaultValues: {
      name: "",
      email: "",
      city: "",
      interest: "",
      archetype: "",
    },
    mode: "onChange",
  });

  useEffect(() => {
    const handleSelectArchetype = (e: Event) => {
      const customEvent = e as CustomEvent<{
        archetype: string;
        interest: string;
      }>;
      setValue("archetype", customEvent.detail.archetype, {
        shouldValidate: true,
        shouldDirty: true,
      });
      setValue("interest", customEvent.detail.interest, {
        shouldValidate: true,
        shouldDirty: true,
      });
    };
    window.addEventListener("forge:select-archetype", handleSelectArchetype);
    return () =>
      window.removeEventListener(
        "forge:select-archetype",
        handleSelectArchetype,
      );
  }, [setValue]);

  const formValues = watch();
  const { missions, progress, topText, leftText } = useLeadMissions(formValues);

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
        throw new Error(
          resData.message || "Não foi possível concluir o cadastro.",
        );
      }

      setStatus("success");
      setFeedback(
        resData.message ||
          "Cadastro realizado. Você receberá as próximas novidades.",
      );
      reset();
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Erro inesperado ao enviar seus dados.",
      );
    }
  }

  return (
    <motion.aside id="captura" {...fadeUp} className="w-full scroll-mt-24">
      <Card variant="surface">
        {status === "success" ? (
          <div className="flex flex-col items-center justify-center space-y-6 py-12 text-center">
            <div className="chamfer-sm border border-[#ff2400]/50 bg-[#ff2400]/10 p-6 md:p-8">
              <p className="font-display text-lg font-bold uppercase tracking-[0.04em] text-[#faf3e0]">
                Ficha Forjada com Sucesso
              </p>
              <p className="mt-2 text-[#D1D1D1]">{feedback}</p>
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                setStatus("idle");
                setFeedback("");
                reset();
              }}
            >
              Voltar ao formulário
            </Button>
          </div>
        ) : (
          <>
            <div className="chamfer-sm bg-[#0b0b0d] p-4 ring-1 ring-inset ring-[#2a2a30]">
              <div className="mb-3 flex items-center justify-between">
                <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ff5a36]">
                  <KeystoneIcon
                    className="h-2.5 w-2.5 shrink-0 text-[#ff2400]"
                    aria-hidden="true"
                  />
                  Acendendo a Forja
                </p>
                <p className="font-display text-sm font-bold text-[#ffb700]">
                  {topText}
                </p>
              </div>
              <div className="h-2 w-full chamfer-sm bg-[#1E1E1E]">
                <motion.div
                  className="h-full bg-[#ff2400] shadow-[inset_0_1px_0_rgba(250,243,224,0.22)]"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-[#A1A1A1]">
                <span>{leftText}</span>
              </div>
            </div>

            <h2 className="mt-5 font-display text-xl font-bold uppercase tracking-[0.04em] text-[#faf3e0]">
              Assine o Livro da Forja
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#A1A1A1]">
              Preencha seus atributos para garantir acesso prioritário. Os primeiros a chegarem receberão o título exclusivo de Ferreiro Fundador.
            </p>

            <div className="mt-4 grid gap-2 sm:grid-cols-3 md:grid-cols-5">
              {missions.map((mission) => (
                <div
                  key={mission.label}
                  className={`flex items-center gap-2 chamfer-sm border px-3 py-2 text-xs ${
                    mission.done
                      ? "border-[#ff2400]/50 bg-[#ff2400]/10 text-[#faf3e0]"
                      : "border-[#2D2D2D] bg-[#0b0b0d] text-[#A1A1A1]"
                  }`}
                >
                  <KeystoneIcon
                    className={`h-3 w-3 shrink-0 ${mission.done ? "text-[#ff2400]" : "text-[#4A4A4A]"}`}
                    aria-hidden="true"
                  />
                  {mission.label}
                </div>
              ))}
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 grid gap-8 md:grid-cols-2"
            >
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className={labelStyles}>
                  Nome do Aventureiro ou da sua Taverna
                </label>
                <input
                  id="name"
                  {...register("name")}
                  className={fieldStyles}
                  placeholder="Seu nome ou da sua loja"
                  maxLength={60}
                />
                {errors.name && (
                  <span className={errorStyles}>{errors.name.message}</span>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className={labelStyles}>
                  Contato Mágico
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className={fieldStyles}
                  placeholder="Seu e-mail"
                  maxLength={100}
                />
                {errors.email && (
                  <span className={errorStyles}>{errors.email.message}</span>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="city" className={labelStyles}>
                    Seu Território
                  </label>
                  <input
                    id="city"
                    {...register("city")}
                    className={fieldStyles}
                    placeholder="Ex: Londrina, São Paulo"
                    maxLength={60}
                  />
                  {errors.city && (
                    <span className={errorStyles}>{errors.city.message}</span>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="interest" className={labelStyles}>
                    Foco da Jornada
                  </label>
                  <select
                    id="interest"
                    {...register("interest")}
                    className={fieldStyles}
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    <option value="RPG">RPG (D&D, Tormenta, etc.)</option>
                    <option value="Board Games">
                      Board Games (Jogos de Tabuleiro)
                    </option>
                    <option value="Loja / Espaço Geek">
                      Loja / Espaço Físico Geek
                    </option>
                    <option value="TCG">TCG / Card Games</option>
                    <option value="Outros">Outros</option>
                  </select>
                  {errors.interest && (
                    <span className={errorStyles}>{errors.interest.message}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <p className={labelStyles}>Escolha sua Classe (Perfil)</p>
                <div className="grid gap-2 lg:grid-cols-2">
                  <Controller
                    name="archetype"
                    control={control}
                    render={({ field }) => (
                      <>
                        {archetypes.map((archetype) => {
                          const Spot = archetype.Spot;
                          const selected = field.value === archetype.id;

                          return (
                            <button
                              key={archetype.id}
                              type="button"
                              onClick={() => field.onChange(archetype.id)}
                              className={`flex w-full items-center gap-3 chamfer-sm border px-3 py-3 text-left transition-colors ${
                                selected
                                  ? "border-[#ff2400] bg-[#ff2400]/10"
                                  : "border-[#2D2D2D] bg-[#0b0b0d] hover:border-[#4A4A4A]"
                              }`}
                            >
                              <Spot className="h-10 w-10 shrink-0" />
                              <span>
                                <span className="block font-display text-xs font-bold uppercase tracking-[0.06em] text-[#faf3e0]">
                                  {archetype.name}
                                </span>
                                <span className="mt-0.5 block text-xs text-[#A1A1A1]">
                                  {archetype.description}
                                </span>
                              </span>
                            </button>
                          );
                        })}
                      </>
                    )}
                  />
                  {errors.archetype && (
                    <span className={errorStyles}>
                      {errors.archetype.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-auto space-y-4 pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  isLoading={status === "loading"}
                >
                  Forjar Minha Ficha
                  <ArrowRight className="h-4 w-4" />
                </Button>

                <p className="text-xs text-[#717171]">
                  Ao confirmar, você aceita receber nossos corvos mensageiros
                  (e-mails) com atualizações sobre o Beta e a abertura da Forja.
                </p>

                {status === "error" && feedback ? (
                  <p className="chamfer-sm border border-[#ff5a36]/50 bg-[#ff5a36]/10 px-3 py-2 text-sm text-[#ff5a36]">
                    {feedback}
                  </p>
                ) : null}
              </div>
            </div>
          </form>
          </>
        )}
      </Card>
    </motion.aside>
  );
};
