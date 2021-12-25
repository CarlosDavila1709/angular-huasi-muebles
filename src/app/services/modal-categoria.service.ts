import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ModalCategoriaService {

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

  crearCategoria( categoria: { nombre: string, descripcion: string} ){
    const url = `${ base_url }/categoria`;    
    //return this.http.post( url,  categoria );

  }


}
