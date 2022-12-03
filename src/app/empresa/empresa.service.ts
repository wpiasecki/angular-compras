import { Injectable } from '@angular/core';
import { EmpresaDatasource } from './empresa.datasource';
import { Empresa } from './empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private empresaDatasource: EmpresaDatasource) { }

  findById(id: number) {
    return this.empresaDatasource.empresas.find(empresa => empresa.id === id);
  }

  list() {
    return this.empresaDatasource.empresas;
  }

  save(empresa: Empresa) {
    this.empresaDatasource.empresas.push(empresa);
  }

  update(empresa: Empresa) {

  }

  delete(id: number) {
    this.empresaDatasource.empresas = this.empresaDatasource.empresas.filter(empresa => empresa.id !== id);
  }


  
}
