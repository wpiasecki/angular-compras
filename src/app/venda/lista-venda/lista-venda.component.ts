import { Component } from '@angular/core';
import { Venda } from '../venda.model';
import { VendaService } from '../venda.service';

@Component({
  selector: 'app-lista-venda',
  templateUrl: './lista-venda.component.html',
  styleUrls: ['./lista-venda.component.scss']
})
export class ListaVendaComponent {

  vendas: Venda[] = [];

  constructor(private vendaService: VendaService) { }

  ngOnInit() {
    this.vendaService.list().subscribe(vendas => this.vendas = vendas);
  }

}
