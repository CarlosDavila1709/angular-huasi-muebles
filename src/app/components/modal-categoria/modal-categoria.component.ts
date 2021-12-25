import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalCategoriaService } from 'src/app/services/modal-categoria.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-categoria',
  templateUrl: './modal-categoria.component.html',
  styles: [
  ]
})
export class ModalCategoriaComponent implements OnInit {
  
  public categoriaForm: FormGroup;

  constructor( private fb: FormBuilder,
              public modalCategoriaService: ModalCategoriaService) { }

  ngOnInit(): void {

    this.categoriaForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }

  
  cerrarModal() {

    this.modalCategoriaService.cerrarModal();
  } 
  guardarCategoria(){
    const { nombre, descripcion } = this.categoriaForm.value;

    console.log("graba..." + nombre +" "+descripcion);
    this.cerrarModal();
  }
}
