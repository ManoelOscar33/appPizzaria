import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
import { Observable } from 'rxjs/Observable';

import { URL_API } from './app.api';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class OfertasService {

    constructor(private http: Http) {}

    public getOfertas(): Promise<Array<Oferta>> {
        return this.http.get(`${URL_API}?destaque=true`)
            .toPromise()
            .then((resposta: Response) => resposta.json())
    }

    public getOfertasPorCategoria(categoria: string): Promise<Array<Oferta>> {
        return this.http.get(`${URL_API}?categoria=${categoria}`)
            .toPromise()
            .then((resposta: Response) => resposta.json())
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`${URL_API}?id=${id}`)
            .toPromise()
            .then((resposta: Response) => {
                return resposta.json()[0]
            })
            
    }

    public pesquisaOfertas(termo: string): Observable<Array<Oferta>> {
        return this.http.get(`${URL_API}?descricao_oferta_like=${termo}`)
            .retry(10)
            .map((resposta: Response) => resposta.json());
    }

    /*
    public ofertas: Array<Oferta> = [
        {
        
            id: 1,
            categoria: "pizza",
            titulo: "Pizzas Grandes",
            descricao_oferta: "Duas pizzas grandes com valor de uma.",
            anunciante: "Pizzaria",
            valor: 29.90,
            destaque: true,
            imagens: [
                {url: "/assets/img1.jpg"},
                {url: "/assets/ofertas/1/img2.jpg"},
                {url: "/assets/ofertas/1/img3.jpg"},
                {url: "/assets/ofertas/1/img4.jpg"}
            ]
        },
        {
            id: 2,
            categoria: "pizza",
            titulo: "Pizzas Médias",
            descricao_oferta: "Duas pizzas médias com valor de uma.",
            anunciante: "Pizzaria",
            valor: 15.00,
            destaque: true,
            imagens: [
                {url: "/assets/img2.jpg"},
                {url: "/assets/ofertas/2/img2.jpg"},
                {url: "/assets/ofertas/2/img3.jpg"},
                {url: "/assets/ofertas/2/img4.jpg"}
            ]
        
        },
        {
            id: 4,
            categoria: "pizza e bebida",
            titulo: "Pizzas Grandes(2)",
            descricao_oferta: "Duas pizzas grandes + sobremesa e refrigerante.",
            anunciante: "Pizzaria",
            valor: 35.00,
            destaque: true,
            imagens: [
                {url: "/assets/img3.jpg"},
                {url: "/assets/ofertas/3/img2.jpg"},
                {url: "/assets/ofertas/3/img3.jpg"},
                {url: "/assets/ofertas/3/img4.jpg"},
                {url: "/assets/ofertas/3/img5.jpg"},
                {url: "/assets/ofertas/3/img6.jpg"}
            ]
        }
    ];

    public getOfertas(): Array<Oferta> {
        return this.ofertas;
    }

    public getOfertas2(): Promise<Array<Oferta>> {
        return new Promise((resolve, reject) => {
            let deu_certo = true;
            if(deu_certo) {
                setTimeout(() => resolve(this.ofertas), 3000);
            } else {
                reject({ codigo_erro: 404, mensagem_erro: "Servidor não encontrado" });
            }
        })
        .then((ofertas: Array<Oferta>) => {
            //fazer alguma tratativa
            console.log('primeiro then.')
            return ofertas;
        })
        .then((ofertas: Array<Oferta>) => {
            //fazer uma outra tratativa
            console.log('segundo then.')
            return new Promise((resolve2, reject2) => {
                setTimeout(() => resolve2(ofertas), 3000);
            });
        })
        .then((ofertas: Array<Oferta>) => {
            //fazer alguma tratativa
            console.log('Terceiro then executado após 3 segundos porque estava aguardando uma promise ser resolvida.')
            return ofertas;
        })


    }*/
  
    
  
}