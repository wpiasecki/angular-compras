import { Injectable } from "@angular/core";
import { startWith } from "rxjs";
import { EmpresaDatasource } from "../empresa/empresa.datasource";
import { EmpresaService } from "../empresa/empresa.service";
import { Produto } from "./produto.model";


@Injectable({
    providedIn: 'root'
})
export class ProdutoDatasource {

    constructor(private empresaDatasource: EmpresaDatasource) {

    }

    public produtos = this.mock();

    mock() {
        return [
            new Produto({
              id: 1,
              nome: "Parafuso",
              preco: 1.50,
              empresa: this.empresaDatasource.empresas.find(e => e.nome === 'ALFA')
            }),
            new Produto({
              id: 2,
              nome: "Prego",
              preco: 1.20,
              empresa: this.empresaDatasource.empresas.find(e => e.nome === 'ALFA')
            }),
            new Produto({
              id: 3,
              nome: "Alicate",
              preco: 7.00,
              empresa: this.empresaDatasource.empresas.find(e => e.nome === 'ALFA')
            }),
            new Produto({
              id: 4,
              nome: "Manga",
              preco: 5.10,
              empresa: this.empresaDatasource.empresas.find(e => e.nome === 'BETA')
            }),
            new Produto({
              id: 5,
              nome: "Morango",
              preco: 3.50,
              empresa: this.empresaDatasource.empresas.find(e => e.nome === 'BETA')
            }),
            new Produto({
              id: 6,
              nome: "Cloro",
              preco: 0.50,
              empresa: this.empresaDatasource.empresas.find(e => e.nome === 'GAMA')
            }),
            new Produto({
              id: 6,
              nome: "Soda cáustica",
              preco: 0.60,
              empresa: this.empresaDatasource.empresas.find(e => e.nome === 'GAMA')
            }),
          ]
    }
}