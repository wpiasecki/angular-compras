import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditVendaComponent } from '../edit-venda/edit-venda.component';
import { Venda } from '../venda.model';
import { VendaService } from '../venda.service';

@Component({
  selector: 'app-lista-venda',
  templateUrl: './lista-venda.component.html',
  styleUrls: ['./lista-venda.component.scss']
})
export class ListaVendaComponent {

  vendas: Venda[] = [];

  constructor(
    private vendaService: VendaService,
    private dialogRef: MatDialog) { }

  ngOnInit() {
    this.vendaService.list().subscribe(vendas => this.vendas = vendas);
  }

  editarVenda(venda: Venda) {
    this.dialogRef.open(EditVendaComponent, {
      width: '600px',
      data : { venda: venda }
    });
  }

  confirmarExcluirVenda(venda: Venda) {
    console.log("not yet implemented");
  }

  novaVenda() {
    this.dialogRef.open(EditVendaComponent, {
      width: '600px',
      data : { venda: new Venda({}) }
    });
  }

}
