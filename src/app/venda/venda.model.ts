import { Empresa } from "../empresa/empresa.model";
import { ItemVenda } from "./item-venda.model";

export class Venda {
    id: number;
    numero: string;
    data: Date;
    itemVendas: ItemVenda[];
    empresa: Empresa;

    constructor(params: any) {
        this.id = params.id;
        this.numero = params.numero;
        this.data = params.data;
        this.itemVendas = params.itemVendas;
        this.empresa = params.empresa;
    }

    total() {
        return this.itemVendas.reduce(
            (total, itemVenda) => total + (itemVenda.produto.preco * itemVenda.qtde), 
            0);
    }
}