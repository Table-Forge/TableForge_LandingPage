import { NextResponse } from "next/server";

type LeadInput = {
  name?: string;
  email?: string;
  city?: string;
  interest?: string;
  archetype?: string;
};

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmailValid(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let payload: LeadInput;

  try {
    payload = (await request.json()) as LeadInput;
  } catch {
    return NextResponse.json(
      { message: "Dados de cadastro inválidos." },
      { status: 400 }
    );
  }

  const name = normalize(payload.name);
  const email = normalize(payload.email);
  const city = normalize(payload.city);
  const interest = normalize(payload.interest);
  const archetype = normalize(payload.archetype);

  if (!name || !email || !city || !interest) {
    return NextResponse.json(
      { message: "Preencha todos os campos para entrar na lista." },
      { status: 400 }
    );
  }

  if (!isEmailValid(email)) {
    return NextResponse.json(
      { message: "Use um e-mail válido para concluir o cadastro." },
      { status: 400 }
    );
  }

  // Temporary sink until a CRM/DB integration is connected.
  console.info("[lead-capture]", {
    name,
    email,
    city,
    interest,
    archetype,
    createdAt: new Date().toISOString(),
  });

  return NextResponse.json(
    {
      message: "Cadastro confirmado! Você entrou na lista de acesso antecipado.",
    },
    { status: 201 }
  );
}
