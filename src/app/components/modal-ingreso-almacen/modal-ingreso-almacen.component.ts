import { Component, OnInit } from '@angular/core';
import { ModalIngresoAlmacenCentralService } from 'src/app/services/modal-ingreso-almacen-central.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-ingreso-almacen',
  templateUrl: './modal-ingreso-almacen.component.html',
  styles: [
  ]
})
export class ModalIngresoAlmacenComponent implements OnInit {

  constructor( public modalIngresoAlmacenCentralService: ModalIngresoAlmacenCentralService) { }

  ngOnInit(): void {
  }
  cerrarModal() {

    this.modalIngresoAlmacenCentralService.cerrarModal();
  } 

}
