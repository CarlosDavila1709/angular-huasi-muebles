import { Component, OnInit } from '@angular/core';
import { ModalColorService } from 'src/app/services/modal-color.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-color',
  templateUrl: './modal-color.component.html',
  styles: [
  ]
})
export class ModalColorComponent implements OnInit {

  constructor( public modalColorService: ModalColorService) { }

  ngOnInit(): void {
  }

  cerrarModal() {

    this.modalColorService.cerrarModal();
  } 

}
