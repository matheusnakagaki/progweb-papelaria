import { Request , Response} from "express"
import { Produto } from "../models/Produto"
import { Fabricante } from "../models/Fabricante"
import { Endereco } from "../models/Endereco"

const produtos: Produto[] = [];

export function cadastrarProdutos(req: Request, res: Response): void {
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

        if (dadosProduto.preco <= 0) {
            throw new Error("Preço deve ser maior que zero");
        }

        const idExiste = produtos.some(p => p.id === dadosProduto.id);
        if (idExiste) {
            throw new Error("Já existe um produto com esse ID");
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

export function listarProdutos(_req: Request, res: Response): void {
    try {
        res.status(200).json(produtos);
    } catch (erro: unknown) {
        res.status(500).json({
            Message: "Erro ao listar produtos"
        });
    }
}


export function buscarProdutoPorId(req: Request, res: Response): void {
    try {
        const id = Number(req.params.id);

        const produto = produtos.find(p => p.id === id);

        if (!produto) {
            res.status(404).json({
                Message: "Produto não encontrado"
            });
            return;
        }

        res.status(200).json(produto);

    } catch (erro: unknown) {
        res.status(400).json({
            Message: (erro as Error).message
        });
    }
}

export function atualizarProduto(req: Request, res: Response): void {
    try {
        const id = Number(req.params.id);
        const dadosNovos: any = req.body;

        const index = produtos.findIndex(p => p.id === id);

        if (index === -1) {
            res.status(404).json({
                Message: "Produto não encontrado"
            });
            return;
        }

        if (dadosNovos.nome) {
            produtos[index].nome = dadosNovos.nome;
        }
        if (dadosNovos.preco) {
            produtos[index].preco = dadosNovos.preco;
        }
        if (dadosNovos.fabricante?.nome) {
            produtos[index].fabricante.nome = dadosNovos.fabricante.nome;
        }
        if (dadosNovos.fabricante?.endereco?.cidade) {
            produtos[index].fabricante.endereco.cidade = dadosNovos.fabricante.endereco.cidade;
        }
        if (dadosNovos.fabricante?.endereco?.pais) {
            produtos[index].fabricante.endereco.pais = dadosNovos.fabricante.endereco.pais;
        }

        res.status(200).json(produtos[index]);

    } catch (erro: unknown) {
        res.status(400).json({
            Message: (erro as Error).message
        });
    }
}

export function removerProduto(req: Request, res: Response): void {
    try {
        const id = Number(req.params.id);
        const index = produtos.findIndex(p => p.id === id);

        if (index === -1) {
            res.status(404).json({
                Message: "Produto não encontrado"
            });
            return;
        }

        produtos.splice(index, 1);

        res.status(200).json({
            Message: "Produto removido com sucesso"
        });

    } catch (erro: unknown) {
        res.status(400).json({
            Message: (erro as Error).message
        });
    }
}