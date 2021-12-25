import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ModalModeloService {

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

  crearModelo( modelo: { nombre: string, descripcion: string} ){
    const url = `${ base_url }/modelo`;    
    //return this.http.post( url,  categoria );

  }
}
