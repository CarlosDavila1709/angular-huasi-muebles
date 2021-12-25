import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ModalMaterialService {

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

  crearMaterial( material: { nombre: string, descripcion: string} ){
    const url = `${ base_url }/material`;    
    //return this.http.post( url,  categoria );

  }
}
