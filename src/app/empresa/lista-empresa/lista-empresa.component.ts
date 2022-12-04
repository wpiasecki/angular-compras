import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditEmpresaComponent } from '../edit-empresa/edit-empresa.component';
import { Empresa } from '../empresa.model';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-lista-empresa',
  templateUrl: './lista-empresa.component.html',
  styleUrls: ['./lista-empresa.component.scss']
})
export class ListaEmpresaComponent {

  empresas: Empresa[] = [];

  constructor(
    private empresaService: EmpresaService,
    private matDialog: MatDialog) { }

  ngOnInit() {
    this.listar()
  }

  listar() { 
    this.empresaService.list().subscribe(empresas => this.empresas = empresas); 
  }

  novaEmpresa() {
    this.matDialog.open(EditEmpresaComponent, {
      width: '600px',
      data : { empresa : {} }
    });
  }

  editarEmpresa(empresa: Empresa) {
    this.matDialog.open(EditEmpresaComponent, {
      width: '600px',
      data: { empresa: empresa }
    });
  }

  confirmarExclusao(empresa: Empresa) {
    const mensagem = "Tem certeza que deseja excluir a empresa '"+ empresa.nome + "'?";
    if (confirm(mensagem)) {
      this.empresaService.delete(empresa.id);
      this.listar();
    }
  }

}
