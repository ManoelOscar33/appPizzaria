import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { RefrigeranteComponent } from './refrigerante/refrigerante.component';
import { OfertaComponent } from './oferta/oferta.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pizzas', component: PizzasComponent },
    { path: 'refrigerante', component: RefrigeranteComponent },
    { path: 'oferta/:id', component: OfertaComponent },
    { path: 'ordem-Compra/:id', component: OrdemCompraComponent }
]