import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { delay } from 'rxjs/operators';
import { Planilla } from 'src/app/models/planilla.model';
import { ModalAgregarGastoMaterialService } from 'src/app/services/modal-agregar-gasto-material.service';
import { ModalCrearSemanaPersonalService } from 'src/app/services/modal-crear-semana-personal.service';
import { ModalSemanaPersonalService } from 'src/app/services/modal-semana-personal.service';


@Component({
  selector: 'app-actualizarproyecto',
  templateUrl: './actualizarproyecto.component.html',
  styles: [
  ]
})

export class ActualizarproyectoComponent implements OnInit {



  constructor( private modalAgregarGastoMaterialService : ModalAgregarGastoMaterialService,
                private modalSemanaPersonalService: ModalSemanaPersonalService,
                private modalCrearSemanaPersonalService: ModalCrearSemanaPersonalService) {}

  ngOnInit(): void {

  }

  mostrarAgregarGastoMaterial(){
    this.modalAgregarGastoMaterialService.abrirModal();
  }
  mostrarCrearSemanaPersonal(){
    this.modalCrearSemanaPersonalService.abrirModal();
  }

  actualizarSemana(){
    this.modalSemanaPersonalService.abrirModal();
  }

  eliminarSemana(){

  }
}
