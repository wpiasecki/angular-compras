import { Empresa } from "../empresa/empresa.model";


export class Produto {
    id: number;
    nome: string;
    preco: number;
    empresa: Empresa;

    constructor(params: any) {
        this.id = params.id;
        this.nome = params.nome;
        this.preco = params.preco;
        this.empresa = params.empresa;
    }
}