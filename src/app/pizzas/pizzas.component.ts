import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css'],
  providers: [ OfertasService ]
})
export class PizzasComponent implements OnInit {

  public ofertas: Array<Oferta>;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('pizzas')
      .then(( ofertas: Array<Oferta>) => {
        this.ofertas = ofertas;
        
      })
  }

}
