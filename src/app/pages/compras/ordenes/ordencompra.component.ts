import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ordenescompra } from 'src/app/models/ordenescompra.model';
import { ModalIngresoAlmacenCentralService } from 'src/app/services/modal-ingreso-almacen-central.service';
import { ModalTrasladoOrdenService } from 'src/app/services/modal-traslado-orden.service';

import { OrdenesCompraService } from '../../../services/ordenescompra.service';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordencompra.component.html',
  styles: [
  ]
})
export class OrdencompraComponent implements OnInit, OnDestroy {
  
  public totalOrdenes: number = 0;
  public ordenes: Ordenescompra[] = [];
  public ordenesTemp: Ordenescompra[] = []; 

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private router: Router,
              private ordenesCompraService: OrdenesCompraService,
              private modalIngresoAlmacenCentralService: ModalIngresoAlmacenCentralService) {}
  
  ngOnInit(): void {
    this.cargarOrdenes();
  }
  ngOnDestroy(): void{

  }
  cargarOrdenes(){

    this.cargando = true;
    this.ordenesCompraService.cargarOrdenes( this.desde )
        .subscribe( ({ total, ordenes }) => {
          this.totalOrdenes = total;
          this.ordenes      = ordenes;
          this.ordenesTemp  = ordenes;
          this.cargando      = false;
        })
  }

  verOrden(orden: Ordenescompra){
    this.router.navigateByUrl(`/dashboard/orden/${ orden.uid }`);
  }
  nuevaOrdenCompra(){
    console.log("sdfsadf")
    this.router.navigateByUrl(`/dashboard/neworden`);
  }
  ingresarOrden(){
    this.modalIngresoAlmacenCentralService.abrirModal();
  }
  trasladoDeMaterial(orden: Ordenescompra){
    this.router.navigateByUrl(`/dashboard/traslado-central/${ orden.uid }`);
  }
}
