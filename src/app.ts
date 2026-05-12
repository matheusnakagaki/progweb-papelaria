import express, { Request , Response} from "express"
import { Produto } from "./models/Produto"
import { Fabricante } from "./models/Fabricante"
import { Endereco } from "./models/Endereco"

const app = express()
const PORT = process.env.PORT ?? 3000
app.use(express.json())

const produtos: Produto[] = [];

function novoProduto(req: Request, res: Response): void {
    try {
        let dadosProduto: any = req.body

        if(
            !dadosProduto.id ||
            !dadosProduto.nome ||
            !dadosProduto.preco ||
            !dadosProduto.fabricante ||
            !dadosProduto.fabricante.nome ||
            !dadosProduto.fabricante.endereco ||
            !dadosProduto.fabricante.endereco.cidade ||
            !dadosProduto.fabricante.endereco.pais 
        ) {
            throw new Error(
                "Produto requer nome, preço e fabricante"
            )
        }

        const endereco = new Endereco(
            dadosProduto.fabricante.endereco.cidade,
            dadosProduto.fabricante.endereco.pais
        );

        const fabricante = new Fabricante(
            dadosProduto.fabricante.nome,
            endereco
        );

        const produto = new Produto(
            dadosProduto.id,
            dadosProduto.nome,
            dadosProduto.preco,
            fabricante
        );

        produtos.push(produto);
        res.status(200).json(produto);

    } catch (erro: unknown) {
        res.status(400).json({
            Message: (erro as Error).message
        })
    }
}

app.post("/api/produtos", novoProduto);
app.listen(PORT, () => {
    console.log(`API em execução na URL http://localhost:${PORT}`);
});