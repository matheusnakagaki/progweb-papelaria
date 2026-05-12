import express from "express";
import produtoRotas from "./rotas/rotas";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());


app.use("/api", produtoRotas)

app.listen(PORT, () => {
    console.log(`API em execução na URL http://localhost:${PORT}`);
});