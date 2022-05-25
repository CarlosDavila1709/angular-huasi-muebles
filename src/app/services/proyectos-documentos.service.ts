import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { CargarProyectosDocumentos } from '../interfaces/cargar-proyectos-documentos.interface';
import { ProyectoDocumentos } from '../models/proyectodocumentos';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})


export class ProyectosDocumentosService {

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

  cargarProyectosDocumentos( desde: number = 0 ){
    const url = "../../assets/data-test/proyectos-documentos.json";
    console.log("cargando...."+ url);


    return this.http.get<CargarProyectosDocumentos>( url, this.headers )
    .pipe(
      map( resp => {
        console.log(resp);
        const proyectos = resp.proyectosdocumentos.map(
          proyectoDocumentos => new ProyectoDocumentos(
            proyectoDocumentos.numeroProyecto,
            proyectoDocumentos.nombre,
            proyectoDocumentos.cliente,
            proyectoDocumentos.sede,
            proyectoDocumentos.fechaRegistro,
            proyectoDocumentos.estado,
            proyectoDocumentos.estadoDoc,
            proyectoDocumentos.estadoEO,
            proyectoDocumentos.estadoOS,
            proyectoDocumentos.estadoInforme,
            proyectoDocumentos.estadoConf,
            proyectoDocumentos.estadoFact
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
