import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/models/material.model';
import { MaterialService } from 'src/app/services/material.service';
import { ModalBuscadorMaterialService } from 'src/app/services/modal-buscador-material.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-buscador-material',
  templateUrl: './modal-buscador-material.component.html',
  styles: [
  ]
})
export class ModalBuscadorMaterialComponent implements OnInit {

  public materiales: Material[] = [];
  public materialesTemp: Material[] = []; 

  constructor( public modalBuscadorMaterialService: ModalBuscadorMaterialService,
                private materialService: MaterialService) { }

  ngOnInit(): void {
  }

  cerrarModal() {

    this.modalBuscadorMaterialService.cerrarModal();
  } 

  buscar( termino: string ) {
    if( termino.length === 0 ){
      return this.materiales = this.materialesTemp;
    }

    this.materialService.buscar( termino )
        .subscribe( (resultados: Material[])  => {
            this.materiales = resultados;
        });
  }
  agregarMaterial(material: Material){
    console.log(material.uid)
    this.modalBuscadorMaterialService.nuevoMaterial.emit(material);
    this.cerrarModal();
  }
}
