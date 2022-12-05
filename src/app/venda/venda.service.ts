import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getNextId } from '../util';
import { VendaDatasource } from './venda.datasource';
import { Venda } from './venda.model';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  constructor(private vendaDatasource: VendaDatasource) { }

  list(): Observable<Venda[]> {
    return new Observable(o => o.next(this.vendaDatasource.vendas));
  }

  save(venda: Venda) {
    if (!venda.id) {
      const nextId = getNextId(this.vendaDatasource.vendas);
      venda.id = nextId;
      this.vendaDatasource.vendas.push(venda);
    } else {
      const index = this.vendaDatasource.vendas.findIndex(v => v.id === venda.id)
      this.vendaDatasource.vendas[index] = venda;
    }
  }

  delete(id: number) {
    this.vendaDatasource.vendas = this.vendaDatasource.vendas.filter(venda => venda.id !== id);
  }
}
