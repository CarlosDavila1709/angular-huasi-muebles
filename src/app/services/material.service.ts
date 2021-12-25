import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { environment } from '../../environments/environment';
import { CargarMateriales } from '../interfaces/cargar-materiales.interfaces';
import { Material } from '../models/material.model';



const base_url = environment.base_url;

@Injectable({
    providedIn: 'root'
  })

export class MaterialService {

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
    cargarMaterial( desde: number = 0 ){
        //const url = `${ base_url }/usuarios?desde=${ desde }`;
        const url = "../../assets/data-test/material.json";
        console.log("cargando....");
        return this.http.get<CargarMateriales>( url, this.headers )
                    .pipe(
                      map( resp => {
                        console.log(resp);
                        const materiales = resp.materiales.map( 
                          material => new Material(material.uid, material.name, material.reference, material.description)
                        );
                        return {
                          total: resp.total,
                          materiales
                        };
                        
                      })
                    );
                    
    }

    buscar( 
      termino: string = ''
    ) {

      //const url = `${ base_url }/todo/coleccion/${ termino }`;

      const url = "../../assets/data-test/material.json";
      
      console.log(url);
      return this.http.get<any[]>( url, this.headers )
                .pipe(
                  map( ( resp: any ) => {
                    console.log("resp: "+resp);
                    return resp.materiales.map(
                      material => new Material(material.uid, 
                                                material.name, 
                                                material.reference, 
                                                material.description,
                                                material.categoria,
                                                material.marca,
                                                material.color,
                                                material.modelo)
                    );
                  })
                );
  } 
}