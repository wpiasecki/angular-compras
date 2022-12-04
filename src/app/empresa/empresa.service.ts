import { Injectable } from '@angular/core';
import { getNextId } from '../util';
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
      empresa.id = getNextId(empresasI);
      empresasI.push(empresa);
    } else {
      const index = empresasI.findIndex(e => e.id === empresa.id);
      empresasI[index] = empresa;
    }
  }

  delete(id: number) {
    this.empresaDatasource.empresasI = this.empresaDatasource.empresasI.filter(empresa => empresa.id !== id);
  }
  
}
