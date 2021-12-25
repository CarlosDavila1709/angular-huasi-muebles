import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ModalMaterialService } from 'src/app/services/modal-material.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-material',
  templateUrl: './modal-material.component.html',
  styles: [
  ]
})
export class ModalMaterialComponent implements OnInit {

  public materialForm: FormGroup;
  public categorias: Categoria[];

  constructor( private fb: FormBuilder, 
                private categoriaService: CategoriaService,
                public modalMaterialService: ModalMaterialService) { }

  ngOnInit(): void {
    this.materialForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
    });


    this.cargarCategorias();
  }

  cerrarModal() {

    this.modalMaterialService.cerrarModal();

  } 

  guardarMaterial(){
    
  }


  cargarCategorias(){

    this.categoriaService.cargarCategorias()
      .subscribe( (categorias: Categoria[]) =>{
        this.categorias = categorias;
      } );
  
  }

}
