import { TestBed } from '@angular/core/testing';
import { Produto } from './produto.model';

import { ProdutoService } from './produto.service';

describe('ProdutoService', () => {
  let service: ProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add produto', () => {
    expect(service.list().length).toEqual(7);
    service.save(new Produto({}));
    expect(service.list().length).toEqual(8);
  })

  it('should delete', () => {
    expect(service.list().length).toEqual(7);
    service.delete(1);
    expect(service.list().length).toEqual(6);
  });
});
