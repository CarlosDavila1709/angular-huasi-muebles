import { Component, OnInit } from '@angular/core';
import { ModalTrasladoOrdenService } from 'src/app/services/modal-traslado-orden.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-traslado-orden',
  templateUrl: './modal-traslado-orden.component.html',
  styles: [
  ]
})
export class ModalTrasladoOrdenComponent implements OnInit {

  constructor( public modalTrasladoOrdenService: ModalTrasladoOrdenService) { }

  ngOnInit(): void {
  }
  cerrarModal() {

    this.modalTrasladoOrdenService.cerrarModal();
  } 

}
