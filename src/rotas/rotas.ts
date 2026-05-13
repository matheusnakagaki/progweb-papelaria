import { Router } from "express";
import { cadastrarProdutos, listarProdutos, buscarProdutoPorId } from "../controladores/controladores";

const router = Router();

router.post("/produtos", cadastrarProdutos); 
router.get("/produtos", listarProdutos);
router.get("/produtos/:id", buscarProdutoPorId);


export default router;