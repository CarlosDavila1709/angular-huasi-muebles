import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { environment } from '../../environments/environment';
import { CargarOrdenes } from '../interfaces/cargar-ordenescompra.interface';
import { Orden } from '../models/orden.model';
import { Ordenescompra } from '../models/ordenescompra.model';

const base_url = environment.base_url;

@Injectable({
    providedIn: 'root'
  })

export class OrdenesCompraService {

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
    cargarOrdenes( desde: number = 0 ){
        //const url = `${ base_url }/usuarios?desde=${ desde }`;
        const url = "../../assets/data-test/ordenes.json";
        console.log("cargando...."+ url);

        return this.http.get<CargarOrdenes>( url, this.headers )
                    .pipe(
                      map( resp => {
                        console.log(resp);
                        const ordenes = resp.ordenes.map( 
                          orden => new Ordenescompra(orden.numeroCorrelativo,
                                                    orden.proveedor, 
                                                    orden.contacto, 
                                                    orden.fechaRegistro, 
                                                    orden.estado, 
                                                    orden.montoTotal,
                                                    orden.subTotal, 
                                                    orden.totalIgv, 
                                                    orden.codigoMoneda, 
                                                    orden.uid)
                        );
                        return {
                          total: resp.total,
                          ordenes
                        };
                        
                      })
                    );
                    
    }

    obtenerOrdenCompraPorUid( uid: string){
     // const url = `${ base_url }/orden/${uid}`;
      const url = "../../assets/data-test/compra.json";
      console.log("ingresa... compra")
      return this.http.get( url)
        .pipe(
          map( (res : Orden ) => res ) 
        );
    }
}