import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Empresa } from "./empresa.model";


@Injectable({
    providedIn: 'root'
})
export class EmpresaDatasource {

    empresasI = this.mock();

    public get empresas (): Observable<Empresa[]> {
      return new Observable(o => o.next(this.empresasI));
    }

    mock(): Empresa[] {
        return [
            {
              id: 1,
              nome: 'Alfa',
              cnpj: '111111000111'
            }, {
              id: 2,
              nome: 'Beta',
              cnpj: '222222000122'
            }, {
              id: 3,
              nome: 'Gama',
              cnpj: '333333000133'
            }
          ]
    }
}