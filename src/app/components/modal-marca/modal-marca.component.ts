import { Component, OnInit } from '@angular/core';
import { ModalMarcaService } from 'src/app/services/modal-marca.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-marca',
  templateUrl: './modal-marca.component.html',
  styles: [
  ]
})
export class ModalMarcaComponent implements OnInit {

  constructor( public modalMarcaService: ModalMarcaService) { }

  ngOnInit(): void {
  }

  cerrarModal() {

    this.modalMarcaService.cerrarModal();
  } 

}
