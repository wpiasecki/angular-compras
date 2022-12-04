import { Component } from '@angular/core';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';
import { MatDialog } from '@angular/material/dialog';
import { EditProdutoComponent } from '../edit-produto/edit-produto.component';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.scss']
})
export class ListaProdutoComponent {

  produtos: Produto[] = [];

  constructor(
    private produtoService: ProdutoService,
    private matDialog: MatDialog){}

  ngOnInit() {
    this.listar()
  }

  listar() {
    this.produtoService.list().subscribe(
      (produtos: Produto[]) => this.produtos = produtos);
  }

  abrirModalEditar(produto: Produto) {
    this.matDialog.open(EditProdutoComponent, {
      width: '600px',
      data: { produto: produto }
    })
  }

  confirmarExclusao(produto: Produto) {
    const mensagem = "Tem certeza de que deseja excluir o produto '" + produto.id + "'?";
    if (confirm(mensagem)) {
      this.produtoService.delete(produto.id);
      this.listar();
    }
  }

  novoProduto() {
    this.matDialog.open(EditProdutoComponent, {
      width: '600px',
      data: { produto: new Produto({}) }
    })
  }

}
