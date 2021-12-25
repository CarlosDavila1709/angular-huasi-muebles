import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalAlmacenService } from 'src/app/services/modal-almacen.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-almacen',
  templateUrl: './modal-almacen.component.html',
  styles: [
  ]
})
export class ModalAlmacenComponent implements OnInit {
  
  public almacenForm: FormGroup;

  constructor( private fb: FormBuilder,
              public modalAlmacenService: ModalAlmacenService) { }

  ngOnInit(): void {

    this.almacenForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      direccion: ['', Validators.required],
    });
  }

  
  cerrarModal() {

    this.modalAlmacenService.cerrarModal();
  } 
  guardarAlmacen(){
    const { nombre, descripcion, direccion } = this.almacenForm.value;

    console.log("graba..." + nombre +" "+descripcion);
    this.cerrarModal();
  }
}
