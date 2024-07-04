import { PrismaClient } from "@prisma/client";
import { Filme } from "../types/filme";

const prisma = new PrismaClient();

export const buscaTodos = async (): Promise<Filme[]> => {
  return await prisma.filme.findMany();
};

export const buscaPorId = async (id: number): Promise<Filme | null> => {
  return await prisma.filme.findFirst({
    where: { id: id },
  });
};

export const adicionar = async (filme: Filme): Promise<Filme | undefined> => {
  const filmeAdicionado = await prisma.filme.create({
    data: filme,
  });

  if (filmeAdicionado) {
    return filmeAdicionado;
  }

  return undefined;
};

export const editar = async (filme: Filme): Promise<boolean> => {
  const filmeEditado = await prisma.filme.update({
    where: { id: filme.id },
    data: filme,
  });

  return !!filmeEditado;
};

export const excluir = async (id: number): Promise<boolean> => {
  const filmeExcluido = await prisma.filme.delete({
    where: { id: id },
  });

  return filmeExcluido !== null;
};
