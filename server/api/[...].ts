import * as filmesApplication from "../applications/filmesApplication";

const router = createRouter();

router.get("/filmes", defineEventHandler(filmesApplication.buscarTodos));
router.get("/filmes/:id", defineEventHandler(filmesApplication.buscarPorId));
router.post("/filmes", defineEventHandler(filmesApplication.adicionar));
router.put("/filmes/:id", defineEventHandler(filmesApplication.editar));
router.delete("/filmes/:id", defineEventHandler(filmesApplication.excluir));

export default useBase("/api/v1", router.handler);
