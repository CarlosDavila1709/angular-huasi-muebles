import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Material } from 'src/app/models/material.model';
import { ModalBuscadorMaterialAlmacenService } from 'src/app/services/modal-buscador-material-almacen.service';

@Component({
  selector: 'app-traslados',
  templateUrl: './traslados.component.html',
  styles: [
  ]
})
export class TrasladosComponent implements OnInit, OnDestroy {

  public materialesTmp: Material[];

  constructor(private modalBuscadorMaterialService: ModalBuscadorMaterialAlmacenService){

  }

  ngOnInit(): void {

  }
  ngOnDestroy(): void{

  }

  buscarMaterialesAlmacen(){

    this.modalBuscadorMaterialService.abrirModal();
  }

}
