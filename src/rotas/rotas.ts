import { Router } from "express";
import { cadastrarProdutos, listarProdutos, buscarProdutoPorId, atualizarProduto, removerProduto } from "../controladores/controladores";

const router = Router();

router.post("/produtos", cadastrarProdutos); 
router.get("/produtos", listarProdutos);
router.get("/produtos/:id", buscarProdutoPorId);
router.put("/produtos/:id", atualizarProduto);
router.delete("/produtos/:id", removerProduto);

export default router;

