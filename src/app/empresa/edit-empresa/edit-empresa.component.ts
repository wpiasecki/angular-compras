import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Empresa } from '../empresa.model';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-edit-empresa',
  templateUrl: './edit-empresa.component.html',
  styleUrls: ['./edit-empresa.component.scss']
})
export class EditEmpresaComponent {

  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private fb : FormBuilder,
    private dialogRef: MatDialogRef<Empresa>,
    private empresaService: EmpresaService
  ) {
    this.form = fb.group({
      nome: ['', Validators.required],
      cnpj: ['', Validators.required]
    })
  }

  ngOnInit() {
    const empresa = this.data.empresa;
    this.form.setValue({
      nome: empresa.nome || '',
      cnpj: empresa.cnpj || ''
    })
  }

  salvar() {
    const empresa = new Empresa(this.form.value);
    empresa.id = this.data.empresa.id;

    this.empresaService.save(empresa);
    this.dialogRef.close();
  }

  cancelar() {
    this.dialogRef.close();
  }

}
