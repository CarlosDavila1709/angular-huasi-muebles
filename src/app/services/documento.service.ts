import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { environment } from '../../environments/environment';
import { CargarDocumento } from '../interfaces/cargar-documentos.interfaces';
import { Documento } from '../models/documento.model';


const base_url = environment.base_url;

@Injectable({
    providedIn: 'root'
  })

export class DocumentoService {

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


    cargarDocumento(){

      //const url = `${ base_url }/categorias`;
      const url = "../../assets/data-test/documentos.json";
      return this.http.get( url, this.headers )
        .pipe(
          map( (resp: {ok: boolean, documento: Documento[]} ) => resp.documento)
        );
    }
    cargarDocumentos( desde: number = 0 ){
        //const url = `${ base_url }/usuarios?desde=${ desde }`;
        const url = "../../assets/data-test/documentos.json";
        console.log("cargando documentos....");
        return this.http.get<CargarDocumento>( url, this.headers )
                    .pipe(
                      map( resp => {
                        console.log(resp);
                        const documentos = resp.documentos.map(
                          documento => new Documento(documento.uid, documento.name,  documento.img)
                        );
                        return {
                          total: resp.total,
                          documentos
                        };

                      })
                    );

    }
}
