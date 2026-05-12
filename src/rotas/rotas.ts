import { Router } from "express";
import { cadastrarProdutos, listarProdutos } from "../controladores/controladores";

const router = Router();

router.post("/produtos", cadastrarProdutos);
router.get("/produtos", listarProdutos);


export default router;