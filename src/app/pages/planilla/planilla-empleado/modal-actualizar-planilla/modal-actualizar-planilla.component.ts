import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalActualizarPlanillaService } from 'src/app/services/modal-actualizar-planilla.service';


@Component({
  selector: 'app-modal-actualizar-planilla',
  templateUrl: './modal-actualizar-planilla.component.html',
  styles: [
  ]
})

export class ModalActualizarPlanillaComponent implements OnInit {

  constructor( private fb: FormBuilder, public modalActualizarPlanillaService: ModalActualizarPlanillaService){}

  ngOnInit(): void {

  }

  cerrarModal() {

    this.modalActualizarPlanillaService.cerrarModal();
  }

}
