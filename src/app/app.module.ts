import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { RefrigeranteComponent } from './refrigerante/refrigerante.component';
import { OfertaComponent } from './oferta/oferta.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';

//pipe
import { DescricaoReduzida } from './util/descricao-reduzida.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    PizzasComponent,
    RefrigeranteComponent,
    OfertaComponent,
    DescricaoReduzida,
    OrdemCompraComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ {provide: LOCALE_ID, useValue: 'pt-Br'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

