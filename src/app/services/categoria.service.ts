import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { environment } from '../../environments/environment';
import { CargarCategorias } from '../interfaces/cargar-categorias.interfaces';
import { Categoria } from '../models/categoria.model';


const base_url = environment.base_url;

@Injectable({
    providedIn: 'root'
  })

export class CategoriaService {

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

    
  cargarCategorias(){
   
    //const url = `${ base_url }/categorias`;
    const url = "../../assets/data-test/categoria.json";
    return this.http.get( url, this.headers )
      .pipe(
        map( (resp: {ok: boolean, categorias: Categoria[]} ) => resp.categorias) 
      );
  }
  
  cargarCategoria( desde: number = 0 ){
      //const url = `${ base_url }/categorias?desde=${ desde }`;
      const url = "../../assets/data-test/categoria.json";
      console.log("cargando....");
      return this.http.get<CargarCategorias>( url, this.headers )
                  .pipe(
                    map( resp => {
                      console.log(resp);
                      const categorias = resp.categorias.map( 
                        cate => new Categoria(cate.uid, cate.name, cate.description)
                      );
                      return {
                        total: resp.total,
                        categorias
                      };
                      
                    })
                  );
                  
  }
}