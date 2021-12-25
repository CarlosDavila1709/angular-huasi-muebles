import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { environment } from '../../environments/environment';
import { CargarAlmacenes } from '../interfaces/cargar-almacenes.interfaces';
import { CargarCategorias } from '../interfaces/cargar-categorias.interfaces';
import { Almacen } from '../models/almacen.model';
import { Categoria } from '../models/categoria.model';


const base_url = environment.base_url;

@Injectable({
    providedIn: 'root'
  })

export class AlmacenesService {

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

    
  cargarAlmacen(){
   
    //const url = `${ base_url }/categorias`;
    const url = "../../assets/data-test/almacen.json";
    return this.http.get( url, this.headers )
      .pipe(
        map( (resp: {ok: boolean, almacenes: Almacen[]} ) => resp.almacenes) 
      );
  }
  
  cargarAlmacenes( desde: number = 0 ){
      //const url = `${ base_url }/categorias?desde=${ desde }`;
      const url = "../../assets/data-test/almacen.json";

      return this.http.get<CargarAlmacenes>( url, this.headers )
                  .pipe(
                    map( resp => {
                      console.log(resp);
                      const almacenes = resp.almacenes.map( 
                        alma => new Almacen(alma.uid, alma.name, alma.description, alma.address)
                      );
                      return {
                        total: resp.total,
                        almacenes
                      };
                      
                    })
                  );
                  
  }
}