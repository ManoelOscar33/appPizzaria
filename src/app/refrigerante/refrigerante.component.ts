import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-refrigerante',
  templateUrl: './refrigerante.component.html',
  styleUrls: ['./refrigerante.component.css'],
  providers: [ OfertasService ]
})
export class RefrigeranteComponent implements OnInit {

  public ofertas: Array<Oferta>;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {

    this.ofertasService.getOfertasPorCategoria('refrigerante')
      .then(( ofertas: Array<Oferta>) => {
        console.log(ofertas);
        this.ofertas = ofertas;
        
      })
  }

}
