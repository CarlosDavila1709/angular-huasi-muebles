import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalMostrarProyectosService } from 'src/app/services/modal-mostrar-proyectos.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-mostrar-proyecto',
  templateUrl: './modal-mostrar-proyectos.component.html',
  styles: [
  ]
})

export class ModalMostrarProyectoComponent implements OnInit {
  constructor( private fb: FormBuilder,
    public modalMostrarProyectosService : ModalMostrarProyectosService){


  }
  ngOnInit(): void {

  }

  cerrarModal() {
    this.modalMostrarProyectosService.cerrarModal();
  }
}
