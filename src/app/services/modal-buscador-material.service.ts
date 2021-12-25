import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Material } from '../models/material.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ModalBuscadorMaterialService {

  public _ocultarModal: boolean = true;
  public tipo: 'usuarios'|'medicos'|'hospitales';
  public id: string;
  public img: string;

  public nuevoMaterial: EventEmitter<Material> = new EventEmitter<Material>();

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
