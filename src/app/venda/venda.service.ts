import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
      const nextId = this.vendaDatasource.vendas.reduce(
        (maxId, venda) => maxId > venda.id ? maxId : venda.id, 0);
      venda.id = nextId;
      this.vendaDatasource.vendas.push(venda);
    }
  }

  delete(id: number) {
    this.vendaDatasource.vendas = this.vendaDatasource.vendas.filter(venda => venda.id !== id);
  }
}
