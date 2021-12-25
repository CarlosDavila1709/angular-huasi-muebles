import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { environment } from '../../environments/environment';
import { CargarProveedor } from '../interfaces/cargar-proveedor.interfaces';
import { Proveedor } from '../models/proveedor.model';

const base_url = environment.base_url;

@Injectable({
    providedIn: 'root'
  })

export class ProveedoresService {

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
    cargarProveedores( desde: number = 0 ){
        //const url = `${ base_url }/usuarios?desde=${ desde }`;
        const url = "../../assets/data-test/proveedores.json";
        console.log("cargando....");
        return this.http.get<CargarProveedor>( url, this.headers )
                    .pipe(
                      map( resp => {
                        console.log(resp);
                        const proveedores = resp.proveedores.map( 
                          user => new Proveedor(user.razonSocial, user.contacto, user.direccion, user.telefono)
                        );
                        return {
                          total: resp.total,
                          proveedores
                        };
                        
                      })
                    );
                    
    }
}