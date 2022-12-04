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
    const empresasI = this.empresaDatasource.empresasI;
    if (!empresa.id) {
      const maxId = empresasI.reduce((maxId, e) => maxId > e.id ? maxId : e.id, 0);
      empresa.id = maxId + 1;
      empresasI.push(empresa);
    } else {
      const index = empresasI.findIndex(e => e.id === empresa.id);
      empresasI[index] = empresa;
    }
  }

  update(empresa: Empresa) {

  }

  delete(id: number) {
    this.empresaDatasource.empresasI = this.empresaDatasource.empresasI.filter(empresa => empresa.id !== id);
  }
  
}
