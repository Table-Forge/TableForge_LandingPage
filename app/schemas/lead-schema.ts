import { z } from "zod";

export const LeadSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  city: z.string().min(2, "Cidade deve ter pelo menos 2 caracteres"),
  interest: z.string().min(1, "Selecione um interesse"),
  archetype: z.string().min(1, "Selecione um perfil gamer"),
});

export type ILeadForm = z.infer<typeof LeadSchema>;
