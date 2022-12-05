import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  form;
  venda = <Venda>{};
  produtos: Produto[] = [];

  constructor(private vendaService: VendaService,
    private dialogRef: MatDialogRef<Venda>,
    private produtoService: ProdutoService,
    private fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any) {
      this.form = this.buildForm();
    }


  buildForm() {
    return this.fb.group({
      numero: ['', Validators.required],
      data: ['', Validators.required],
      itens: this.fb.array([])
    })
  }

  get itens() {
    return this.form.controls['itens'] as FormArray;
  }

  ngOnInit() {
    this.venda = this.data.venda;
    
    const itensControle = this.itens
    this.venda.itemVendas.forEach(item => {
      itensControle.push(this.fb.group({
        produto: [item.produto.id, Validators.required],
        qtde: [item.qtde, Validators.required]
      }))
    })

    this.form.patchValue({
      numero: this.venda.numero || '',
      data: this.venda.data?.toString() || '',
    });

    this.produtoService.list().subscribe(produtos => this.produtos = produtos);
  }

  salvar() {
    const venda = new Venda({
      numero: this.form.controls['numero'].value,
      data: this.form.controls['data'].value,
      itemVendas: this.itens.controls.map(item => new ItemVenda({
        produto: this.produtoService.findById(parseInt(item.value.produto)),
        qtde: item.value.qtde,
      }))
    })
    venda.id = this.venda.id;

    this.vendaService.save(venda);
    this.dialogRef.close();
  }

  cancelar() {
    this.dialogRef.close();
  }

  adicionarItem() {
    this.itens.push(this.fb.group({
      produto: ['', Validators.required],
      qtde: ['', Validators.required]
    }))
  }

  excluirItem(indice: number) {
    this.itens.removeAt(indice);
  }
}
