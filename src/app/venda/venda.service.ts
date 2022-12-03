import { Injectable } from '@angular/core';
import { VendaDatasource } from './venda.datasource';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  constructor(private vendaDatasource: VendaDatasource) { }

  list() {
    return this.vendaDatasource.vendas;
  }
}
