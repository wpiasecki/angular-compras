import { Inject, Component } from '@angular/core';
import { Empresa } from 'src/app/empresa/empresa.model';
import { EmpresaService } from 'src/app/empresa/empresa.service';
import { Produto } from '../produto.model';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProdutoService } from '../produto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-produto',
  templateUrl: './edit-produto.component.html',
  styleUrls: ['./edit-produto.component.scss']
})
export class EditProdutoComponent {

  empresas: Empresa[] = [];
  produto = <Produto> {};
  form: FormGroup;

  constructor(
    private empresaService: EmpresaService,
    private produtoService: ProdutoService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<EditProdutoComponent>,
    private fb: FormBuilder) {
      this.form = fb.group({
        nome: ['', Validators.required],
        preco: ['', Validators.required],
        empresa: ['', Validators.required],
      })
    }

  ngOnInit() {
    this.empresaService.list().subscribe(empresas => this.empresas = empresas);
    this.produto = this.data.produto;
    this.form.setValue({
      nome: this.produto.nome || '',
      preco : this.produto.preco || '',
      empresa: this.produto.empresa
    })
    
  }

  salvar() {
    if (this.produto.id) {
      this.produtoService.edit(this.produto);
    } else {
      this.produtoService.save(this.produto);
    }
    this.dialogRef.close();
  }

  cancelar() {
    this.dialogRef.close();
  }

}
