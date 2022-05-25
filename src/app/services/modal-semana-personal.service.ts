import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CargarPlanilla } from '../interfaces/cargar-planilla.interfaces';
import { Planilla } from '../models/planilla.model';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ModalSemanaPersonalService {

  public _ocultarModal: boolean = true;

  constructor(private http: HttpClient,private router: Router) { }
  get headers(){
    return {
      headers: {
        'x-token': "this.token"
      }
    }
  }
  get ocultarModal(){
    return this._ocultarModal;
  }

  abrirModal(){
    this._ocultarModal = false;
  }

  cerrarModal(){
    this._ocultarModal = true;
  }


  cargarPlanilla( desde: number = 0 ){

    const url = "../../assets/data-test/planilla.json";

    return this.http.get<CargarPlanilla>( url, this.headers )
                  .pipe(
                    map( resp => {
                      console.log(resp);
                      const planillas = resp.planillas.map(
                        planilla => new Planilla(planilla.uid,
                                                  planilla.personal,
                                                  planilla.lunes,
                                                  planilla.martes,
                                                  planilla.miercoles,
                                                  planilla.jueves,
                                                  planilla.viernes,
                                                  planilla.sabado,
                                                  planilla.domingo,
                                                  planilla.totalTurnos,
                                                  planilla.sueldo,
                                                  planilla.adelanto,
                                                  planilla.totalSueldo,
                                                  planilla.totalApagar)
                      );
                      return {
                        total: resp.total,
                        planillas
                      };
                    })
                  );
  }
}
