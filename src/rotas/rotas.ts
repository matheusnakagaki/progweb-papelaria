import { Router } from "express";
import { novoProduto, } from "../controladores/controladores";

const router = Router();

router.post("/product", novoProduto);

export default router;