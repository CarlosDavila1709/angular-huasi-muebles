import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { environment } from '../../environments/environment';
import { CargarTecnico } from '../interfaces/cargar-tecnicos.interfaces';
import { Tecnico } from '../models/tecnico.model';

const base_url = environment.base_url;

@Injectable({
    providedIn: 'root'
  })

export class TecnicoService {

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
    cargarTecnicos( desde: number = 0 ){
        //const url = `${ base_url }/usuarios?desde=${ desde }`;
        const url = "../../assets/data-test/tecnico.json";
        console.log("cargando....");
        return this.http.get<CargarTecnico>( url, this.headers )
                    .pipe(
                      map( resp => {
                        console.log(resp);
                        const tecnicos = resp.tecnicos.map( 
                          user => new Tecnico(user.nombre, user.apellidos, user.fechaNacimiento, user.documento,user.numeroDocumento
                                                ,user.telefono, user.direccion, user.email, '', user.img, user.google, user.role, user.uid)
                        );
                        return {
                          total: resp.total,
                          tecnicos
                        };
                        
                      })
                    );
                    
    }
}