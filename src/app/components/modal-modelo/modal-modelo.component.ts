import { Component, OnInit } from '@angular/core';
import { ModalModeloService } from 'src/app/services/modal-modelo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-modelo',
  templateUrl: './modal-modelo.component.html',
  styles: [
  ]
})
export class ModalModeloComponent implements OnInit {

  constructor( public modalModeloService: ModalModeloService) { }

  ngOnInit(): void {
  }

  cerrarModal() {

    this.modalModeloService.cerrarModal();
  } 

}
