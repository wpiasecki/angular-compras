import { Component } from '@angular/core';
import { Empresa } from '../empresa.model';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-lista-empresa',
  templateUrl: './lista-empresa.component.html',
  styleUrls: ['./lista-empresa.component.scss']
})
export class ListaEmpresaComponent {

  empresas: Empresa[] = [];

  constructor(private empresaService: EmpresaService) { }

  ngOnInit() {
    this.empresaService.list().subscribe(empresas => this.empresas = empresas);
  }

}
