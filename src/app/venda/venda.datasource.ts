import { Injectable } from "@angular/core";
import { EmpresaDatasource } from "../empresa/empresa.datasource";
import { ProdutoDatasource } from "../produto/produto.datasource";
import { ItemVenda } from "./item-venda.model";
import { Venda } from "./venda.model";


@Injectable({
    providedIn: 'root'
})
export class VendaDatasource {

    constructor(
        private produtoDatasource: ProdutoDatasource,
        private empresaDatasource: EmpresaDatasource) {}

    vendas = this.mock();

    mock(): Venda[] {
        return [
            new Venda({
                id: 1,
                numero: '001',
                data: new Date(),
                itemVendas: [
                    new ItemVenda({
                        produto: this.produtoDatasource.produtos.find(p => p.id === 1),
                        qtde: 9}
                    )
                ],
                empresa: this.empresaDatasource.empresas.find(e => e.id === 1)
            })
        ]
    }
}