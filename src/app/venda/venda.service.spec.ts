import { TestBed } from '@angular/core/testing';
import { Produto } from '../produto/produto.model';
import { Venda } from './venda.model';

import { VendaService } from './venda.service';

describe('VendaService', () => {
  let service: VendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should calculate total produto', () => {
    const produto = new Produto({
      id: 100,
      empresa: null,
      nome: 'abacate',
      preco: 10
    });
    const venda = new Venda({
      id: 1,
      numero: '001',
      data: new Date(),
      itemVendas: [
        {
          produto: produto,
          qtde: 5
        }
      ]
    });
    
    expect(venda.total()).toEqual(50);
  })

  it('should have one itemVenda', () => {
    expect(service.list().length).toEqual(1);
  })
});
