import { Component, OnDestroy, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor.model';

import { ProveedoresService } from '../../../services/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styles: [
  ]
})
export class ProveedoresComponent implements OnInit, OnDestroy {
  
  public totalProveedores: number = 0;
  public proveedores: Proveedor[] = [];
  public proveedoresTemp: Proveedor[] = []; 

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private proveedoresService: ProveedoresService) {}
  
  ngOnInit(): void {
    console.log("jejejjeej");
    this.cargarTecnicos();
  }
  ngOnDestroy(): void{

  }
  cargarTecnicos(){

    this.cargando = true;
    this.proveedoresService.cargarProveedores( this.desde )
        .subscribe( ({ total, proveedores }) => {
          this.totalProveedores = total;
          this.proveedores      = proveedores;
          this.proveedoresTemp  = proveedores;
          this.cargando      = false;
        })
  }

}
