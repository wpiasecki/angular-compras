import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaEmpresaComponent } from './empresa/lista-empresa/lista-empresa.component';
import { EditEmpresaComponent } from './empresa/edit-empresa/edit-empresa.component';
import { EditProdutoComponent } from './produto/edit-produto/edit-produto.component';
import { ListaProdutoComponent } from './produto/lista-produto/lista-produto.component';
import { ListaVendaComponent } from './venda/lista-venda/lista-venda.component';
import { EditVendaComponent } from './venda/edit-venda/edit-venda.component';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CdkColumnDef } from '@angular/cdk/table';


@NgModule({
  declarations: [
    AppComponent,
    ListaEmpresaComponent,
    EditEmpresaComponent,
    EditProdutoComponent,
    ListaProdutoComponent,
    ListaVendaComponent,
    EditVendaComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'empresa', component : ListaEmpresaComponent },
      { path: 'produto', component : ListaProdutoComponent },
      { path: 'venda', component : ListaVendaComponent },
    ]),
    NoopAnimationsModule,
  ],
  providers: [CdkColumnDef],
  bootstrap: [AppComponent]
})
export class AppModule { }
