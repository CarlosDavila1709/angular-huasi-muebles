import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ModalBuscadorMaterialAlmacenService {

  public _ocultarModal: boolean = true;

  get ocultarModal(){
    return this._ocultarModal;
  }

  abrirModal(){

    this._ocultarModal = false;

  }

  cerrarModal(){
    this._ocultarModal = true;
  }

  constructor() { }
}
