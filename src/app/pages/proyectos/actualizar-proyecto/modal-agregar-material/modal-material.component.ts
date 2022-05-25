import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalAgregarGastoMaterialService } from 'src/app/services/modal-agregar-gasto-material.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-gasto-material',
  templateUrl: './modal-material.component.html',
  styles: [
  ]
})

export class ModalMaterialComponent implements OnInit {

  constructor( private fb: FormBuilder,
               public modalAgregarGastoMaterialService : ModalAgregarGastoMaterialService){


  }

  ngOnInit(): void {

  }


  cerrarModal() {

    this.modalAgregarGastoMaterialService.cerrarModal();

  }
}
