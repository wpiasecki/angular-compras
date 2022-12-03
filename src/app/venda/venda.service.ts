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
}
