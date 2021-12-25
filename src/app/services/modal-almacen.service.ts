import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ModalAlmacenService {

  public _ocultarModal: boolean = true;

  constructor(private http: HttpClient) { }

  get ocultarModal(){
    return this._ocultarModal;
  }

  abrirModal(){
    this._ocultarModal = false;
  }

  cerrarModal(){
    this._ocultarModal = true;
  }

  crearAlmacen( categoria: { nombre: string, descripcion: string, direccion: string} ){
    const url = `${ base_url }/almacen`;    
    //return this.http.post( url,  categoria );

  }


}
