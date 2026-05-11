import { Endereco } from "./Endereco"

export class Fabricante {
    nomeFab: string;
    endereco: Endereco

    constructor(nomeFab: string, endereco: Endereco) {
        this.nomeFab = nomeFab;
        this.endereco = endereco;
    }
}

