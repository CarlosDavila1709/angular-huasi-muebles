import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { environment } from '../../environments/environment';
import { CargarColores } from '../interfaces/cargar-colores.interfaces';
import { Color } from '../models/color.model';



const base_url = environment.base_url;

@Injectable({
    providedIn: 'root'
  })

export class ColorService {

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
    cargarColor( desde: number = 0 ){
        //const url = `${ base_url }/usuarios?desde=${ desde }`;
        const url = "../../assets/data-test/color.json";
        console.log("cargando....");
        return this.http.get<CargarColores>( url, this.headers )
                    .pipe(
                      map( resp => {
                        console.log(resp);
                        const colores = resp.colores.map( 
                          color => new Color(color.uid, color.name, color.description)
                        );
                        return {
                          total: resp.total,
                          colores
                        };
                        
                      })
                    );
                    
    }
}