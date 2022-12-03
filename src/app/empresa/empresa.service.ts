import { Injectable } from '@angular/core';
import { EmpresaDatasource } from './empresa.datasource';
import { Empresa } from './empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private empresaDatasource: EmpresaDatasource) { }

  findById(id: number) {
    return this.empresaDatasource.empresasI.find(empresa => empresa.id === id);
  }

  list() {
    return this.empresaDatasource.empresas;
  }

  save(empresa: Empresa) {
    this.empresaDatasource.empresasI.push(empresa);
  }

  update(empresa: Empresa) {

  }

  delete(id: number) {
    this.empresaDatasource.empresasI = this.empresaDatasource.empresasI.filter(empresa => empresa.id !== id);
  }


  
}
