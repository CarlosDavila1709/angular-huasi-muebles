import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { environment } from '../../environments/environment';
import { CargarModelos } from '../interfaces/cargr-modelos.interfaces';
import { Modelo } from '../models/modelo.model';


const base_url = environment.base_url;

@Injectable({
    providedIn: 'root'
  })

export class ModeloService {

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
    cargarModelo( desde: number = 0 ){
        //const url = `${ base_url }/usuarios?desde=${ desde }`;
        const url = "../../assets/data-test/modelo.json";
        console.log("cargando....");
        return this.http.get<CargarModelos>( url, this.headers )
                    .pipe(
                      map( resp => {
                        console.log(resp);
                        const modelos = resp.modelos.map( 
                          modelo => new Modelo(modelo.uid, modelo.name, modelo.description)
                        );
                        return {
                          total: resp.total,
                          modelos
                        };
                        
                      })
                    );
                    
    }
}