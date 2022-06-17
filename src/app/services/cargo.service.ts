import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { environment } from '../../environments/environment';
import { CargarCargos } from '../interfaces/cargar-cargos.interfaces';
import { Cargo } from '../models/cargo.model';


const base_url = environment.base_url;

@Injectable({
    providedIn: 'root'
  })

export class CargoService {

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


    cargarCargos(){

      //const url = `${ base_url }/categorias`;
      const url = "../../assets/data-test/cargo.json";
      return this.http.get( url, this.headers )
        .pipe(
          map( (resp: {ok: boolean, marcas: Cargo[]} ) => resp.marcas)
        );
    }
    cargarCargo( desde: number = 0 ){
        //const url = `${ base_url }/usuarios?desde=${ desde }`;
        const url = "../../assets/data-test/cargo.json";
        console.log("cargando....");
        return this.http.get<CargarCargos>( url, this.headers )
                    .pipe(
                      map( resp => {
                        console.log(resp);
                        const cargos = resp.cargos.map(
                          cargo => new Cargo(cargo.uid, cargo.name, cargo.description, cargo.sueldoDiario, cargo.uidMoneda, cargo.monedaPrefijo)
                        );
                        return {
                          total: resp.total,
                          cargos
                        };

                      })
                    );

    }
}
