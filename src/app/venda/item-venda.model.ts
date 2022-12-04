import { Produto } from "../produto/produto.model";


export class ItemVenda {
    produto: Produto;
    qtde: number;

    constructor(params: any) {
        this.produto = params.produto || {};
        this.qtde = params.qtde;
    }
}