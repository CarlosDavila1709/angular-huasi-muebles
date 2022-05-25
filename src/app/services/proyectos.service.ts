import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { CargarProyectos } from '../interfaces/cargar-proyectos.interfaces';
import { Proyecto } from '../models/proyecto.model';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})

export class ProyectosService {

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

  cargarProyectos( desde: number = 0 ){
    const url = "../../assets/data-test/proyectos.json";
    console.log("cargando...."+ url);


    return this.http.get<CargarProyectos>( url, this.headers )
    .pipe(
      map( resp => {
        console.log(resp);
        const proyectos = resp.proyectos.map(
          proyecto => new Proyecto(
            proyecto.numeroProyecto,
            proyecto.nombre,
            proyecto.fechaRegistro,
            proyecto.fechaInicio,
            proyecto.fechaFinalizacion,
            proyecto.estado,
            proyecto.cliente,
            )
        );
        return {
          total: resp.total,
          proyectos
        };

      })
    );
  }

}
