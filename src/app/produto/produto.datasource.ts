import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EmpresaDatasource } from "../empresa/empresa.datasource";
import { EmpresaService } from "../empresa/empresa.service";
import { Produto } from "./produto.model";


@Injectable({
    providedIn: 'root'
})
export class ProdutoDatasource {

    constructor(private empresaDatasource: EmpresaDatasource) {

    }

    public produtosI = this.mock();

    public get produtos(): Observable<Produto[]> {
      return new Observable(observable => observable.next(this.produtosI));
    }

    mock() {
      const getEmpresa = (nome: string) => this.empresaDatasource.empresasI.find(e => e.nome === nome);
      return [
        new Produto({ id: 1, nome: "Parafuso",  preco: 1.50, empresa: getEmpresa('Alfa') }),
        new Produto({ id: 2, nome: "Prego",     preco: 1.20, empresa: getEmpresa('Alfa')  }),
        new Produto({ id: 3, nome: "Alicate",   preco: 7.00, empresa: getEmpresa('Alfa') }),
        new Produto({ id: 4, nome: "Manga",     preco: 5.10, empresa: getEmpresa('Beta') }),
        new Produto({ id: 5, nome: "Morango",   preco: 3.50, empresa: getEmpresa('Beta') }),
        new Produto({ id: 6, nome: "Cloro",     preco: 0.50, empresa: getEmpresa('Gama') }),
        new Produto({ id: 7, nome: "Soda cáustica", preco: 0.60, empresa: getEmpresa('Gama') }),
      ];
    }
}