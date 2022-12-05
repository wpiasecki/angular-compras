import { Injectable } from '@angular/core';
import { getNextId } from '../util';
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

  findById(id: number) {
    return this.produtoDatasource.produtosI.find(p => p.id === id)
  }

  save(produto: Produto) {
    const produtoI = this.produtoDatasource.produtosI
    if (produto.id) {
      const index = produtoI.findIndex(p => p.id === produto.id)
      produtoI[index] = produto
    } else {
      produto.id = getNextId(produtoI);
      this.produtoDatasource.produtosI.push(produto);
    }
  }

  delete(id: number) {
    this.produtoDatasource.produtosI = this.produtoDatasource.produtosI.filter(p => p.id !== id);
  }

}
