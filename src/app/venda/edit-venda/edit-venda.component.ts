import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Venda } from '../venda.model';
import { VendaService } from '../venda.service';
import { ItemVenda } from '../item-venda.model';
import { Produto } from 'src/app/produto/produto.model';
import { ProdutoService } from 'src/app/produto/produto.service';

@Component({
  selector: 'app-edit-venda',
  templateUrl: './edit-venda.component.html',
  styleUrls: ['./edit-venda.component.scss']
})
export class EditVendaComponent {

  produtos: Produto[] = [];
  venda: Venda = new Venda({});

  constructor(private vendaService: VendaService,
    private dialogRef: MatDialogRef<Venda>,
    private produtoService: ProdutoService,
    @Inject(MAT_DIALOG_DATA) private data: any) {}

  ngOnInit() {
    this.venda = this.data.venda;
    console.log('this.venda', this.venda);
    this.produtoService.list().subscribe(produtos => this.produtos = produtos);
  }

  salvar() {
    this.vendaService.save(this.venda);
    this.dialogRef.close();
  }

  cancelar() {
    this.dialogRef.close();
  }

  adicionarItem() {
    this.venda.itemVendas.push(new ItemVenda({}));
  }

  excluirItem(indice: number) {
    this.venda.itemVendas.splice(indice, 1);
  }
}
