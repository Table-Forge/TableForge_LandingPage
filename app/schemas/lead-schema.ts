import { z } from "zod";

export const LeadSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(60, "O nome pode ter no máximo 60 caracteres"),
  email: z.string().email("E-mail inválido").max(100, "O e-mail pode ter no máximo 100 caracteres"),
  city: z.string().min(2, "Cidade deve ter pelo menos 2 caracteres").max(60, "A cidade pode ter no máximo 60 caracteres"),
  interest: z.string().min(1, "Selecione um interesse"),
  archetype: z.string().min(1, "Selecione seu perfil"),
});

export type ILeadForm = z.infer<typeof LeadSchema>;
