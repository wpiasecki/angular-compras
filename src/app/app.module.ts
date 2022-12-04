import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { ListaEmpresaComponent } from './empresa/lista-empresa/lista-empresa.component';
import { EditEmpresaComponent } from './empresa/edit-empresa/edit-empresa.component';
import { EditProdutoComponent } from './produto/edit-produto/edit-produto.component';
import { ListaProdutoComponent } from './produto/lista-produto/lista-produto.component';
import { ListaVendaComponent } from './venda/lista-venda/lista-venda.component';
import { EditVendaComponent } from './venda/edit-venda/edit-venda.component';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';

registerLocaleData(ptBr);

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
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'empresa', component : ListaEmpresaComponent },
      { path: 'produto', component : ListaProdutoComponent },
      { path: 'venda', component : ListaVendaComponent },
    ]),
    NoopAnimationsModule,
  ],
  bootstrap: [AppComponent],
  providers: [ 
    { provide: LOCALE_ID, useValue: 'pt' } 
  ],
})
export class AppModule { }
