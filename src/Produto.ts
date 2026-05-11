import { Fabricante } from "./Fabricante"

export class Produto {
    id: number;
    nomeProd: string;
    preco: number;
    fabricante: Fabricante;

    constructor(id: number, nomeProd: string, preco: number, fabricante: Fabricante) {
        this.id = id;
        this.nomeProd = nomeProd;
        this.preco = preco;
        this.fabricante = fabricante
    }
}