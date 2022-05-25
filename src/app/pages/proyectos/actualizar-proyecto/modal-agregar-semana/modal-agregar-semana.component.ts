import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalCrearSemanaPersonalService } from 'src/app/services/modal-crear-semana-personal.service';


@Component({
  selector: 'app-modal-agregar-semana',
  templateUrl: './modal-agregar-semana.component.html',
  styles: [
  ]
})

export class ModalAgregarSemanaComponent implements OnInit {

  constructor( private fb: FormBuilder, public modalCrearSemanaPersonalService: ModalCrearSemanaPersonalService){}

  ngOnInit(): void {

  }

  cerrarModal() {

    this.modalCrearSemanaPersonalService.cerrarModal();
  }

}
