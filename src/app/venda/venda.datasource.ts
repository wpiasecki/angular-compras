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
        const getProdutoById = (id: number) => this.produtoDatasource.produtosI.find(p => p.id === id);
        const getEmpresaById = (id: number) => this.empresaDatasource.empresasI.find(e => e.id === id);
        return [
            new Venda({
                id: 1, numero: '001', data: new Date(), empresa: getEmpresaById(1),
                itemVendas: [ 
                    new ItemVenda({ id: 1, produto: getProdutoById(1), qtde: 9}),
                ]
            }),
            new Venda({
                id: 1, numero: '002', data: new Date(), empresa: getEmpresaById(1),
                itemVendas: [ 
                    new ItemVenda({ id: 1, produto: getProdutoById(1), qtde: 9}),
                    new ItemVenda({ id: 1, produto: getProdutoById(2), qtde: 5}),
                ]
            })
        ]
    }
}