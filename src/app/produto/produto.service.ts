import { Injectable } from '@angular/core';
import { EmpresaService } from '../empresa/empresa.service';
import { ProdutoDatasource } from './produto.datasource';
import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  
  constructor(private produtoDatasource: ProdutoDatasource) { }

  list() {
    return this.produtoDatasource.produtos;
  }

  save(produto: Produto) {
    this.produtoDatasource.produtos.push(produto);
  }

  edit (produto: Produto) {

  }

  delete(id: number) {
    this.produtoDatasource.produtos = this.produtoDatasource.produtos.filter(p => p.id !== id);
  }

}
