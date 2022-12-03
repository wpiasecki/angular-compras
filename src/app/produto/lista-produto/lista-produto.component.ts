import { Component } from '@angular/core';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.scss']
})
export class ListaProdutoComponent {

  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService){}

  ngOnInit() {
    this.produtoService.list().subscribe(
      (produtos: Produto[]) => this.produtos = produtos);
  }

}
