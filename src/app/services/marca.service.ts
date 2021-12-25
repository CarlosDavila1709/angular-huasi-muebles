import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { environment } from '../../environments/environment';
import { CargarMarcas } from '../interfaces/cargar-marcas.interfaces';
import { Marca } from '../models/marca.model';


const base_url = environment.base_url;

@Injectable({
    providedIn: 'root'
  })

export class MarcaService {

    constructor( private http: HttpClient,
        private router: Router,
        private ngZone: NgZone ) {

    }  
    get headers(){
        return {
          headers: {
            'x-token': "this.token"
          }
        }
      }
    cargarMarca( desde: number = 0 ){
        //const url = `${ base_url }/usuarios?desde=${ desde }`;
        const url = "../../assets/data-test/marca.json";
        console.log("cargando....");
        return this.http.get<CargarMarcas>( url, this.headers )
                    .pipe(
                      map( resp => {
                        console.log(resp);
                        const marcas = resp.marcas.map( 
                          marca => new Marca(marca.uid, marca.name, marca.description)
                        );
                        return {
                          total: resp.total,
                          marcas
                        };
                        
                      })
                    );
                    
    }
}