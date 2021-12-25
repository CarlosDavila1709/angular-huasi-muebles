import { Component, OnDestroy, OnInit } from '@angular/core';
import { Material } from 'src/app/models/material.model';
import { MaterialService } from 'src/app/services/material.service';
import { ModalMaterialService } from 'src/app/services/modal-material.service';



@Component({
  selector: 'app-material',
  templateUrl: './materiales.component.html',
  styles: [
  ]
})
export class MaterialesComponent implements OnInit, OnDestroy {
  
  public totalMateriales: number = 0;
  public materiales: Material[] = [];
  public materialesTemp: Material[] = []; 

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private materialservice: MaterialService,
              private modalMaterialService: ModalMaterialService) {}
  
  ngOnInit(): void {
    console.log("jejejjeej");
    this.cargarMaterial();
  }
  ngOnDestroy(): void{

  }
  cargarMaterial(){

    this.cargando = true;
    this.materialservice.cargarMaterial( this.desde )
        .subscribe( ({ total, materiales }) => {
          this.totalMateriales = total;
          this.materiales      = materiales;
          this.materialesTemp  = materiales;
          this.cargando      = false;
        })
  }

  nuevoMaterial(){
    this.modalMaterialService.abrirModal();
  }

}
