import { H3Event } from "h3";
import * as service from "../services/filmesService";
import { Filme } from "@prisma/client";

// buscaTodos
export const buscarTodos = async (
  event: H3Event
): Promise<Filme[] | string> => {
  const filmes = await service.buscaTodos();

  if (!filmes.length) {
    setResponseStatus(event, 404);
    return "Não há filmes cadastrados";
  }

  setResponseStatus(event, 200);

  return filmes;
};

// buscaPorId
export const buscarPorId = async (event: H3Event): Promise<Filme | string> => {
  const filmeId = getRouterParam(event, "id") || "";

  if (+filmeId < 0) {
    throw createError({
      status: 400,
      message: "Id do filme inválido",
      statusMessage: "Erro Id",
      data: {
        message: "Filme inválido",
      },
    });
  }

  const filme = await service.buscaPorId(+filmeId);

  if (!filme) {
    setResponseStatus(event, 404);
    return "Filme não encontrado";
  }

  setResponseStatus(event, 200);
  return filme;
};

// adicionar
export const adicionar = async (event: H3Event): Promise<Filme | string> => {
  const body = await readBody<Filme>(event);

  const novoFilme = await service.adicionar(body);

  if (!novoFilme) {
    setResponseStatus(event, 500);
    return "Erro ao cadastrar filme";
  }

  setResponseStatus(event, 200);
  return novoFilme;
};

// editar
export const editar = async (event: H3Event): Promise<string> => {
  const filmeId = getRouterParam(event, "id") || "";
  const body = await readBody<Filme>(event);

  if (+filmeId < 0) {
    throw createError({
      status: 400,
      message: "Id do filme inválido",
      data: {
        message: "Filme inválido",
      },
    });
  }

  const filme = await service.buscaPorId(+filmeId);

  if (!filme) {
    setResponseStatus(event, 404);
    return "Filme não encontrado";
  }

  const editado = await service.editar(body);

  if (!editado) {
    setResponseStatus(event, 500);
    return "Erro ao editar o filme.";
  }

  setResponseStatus(event, 200);
  return "Filme editado com sucesso";
};

// excluir
export const excluir = async (event: H3Event): Promise<string> => {
  const filmeId = getRouterParam(event, "id") || "";

  if (+filmeId < 0) {
    throw createError({
      status: 400,
      message: "Id do filme inválido",
      data: {
        message: "Filme inválido",
      },
    });
  }

  const filme = await service.buscaPorId(+filmeId);

  if (!filme) {
    setResponseStatus(event, 404);
    return "Filme não encontrado";
  }

  const excluido = await service.excluir(+filmeId);

  if (!excluido) {
    setResponseStatus(event, 500);
    return "Erro ao excluir filme";
  }

  setResponseStatus(event, 200);
  return "Filme deletado com sucesso";
};
