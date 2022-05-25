import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ModalCrearSemanaPersonalService {

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


}
