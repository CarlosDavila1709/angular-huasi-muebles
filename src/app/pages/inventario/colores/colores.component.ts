import { Component, OnDestroy, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color.model';
import { ColorService } from 'src/app/services/color.service';
import { ModalColorService } from 'src/app/services/modal-color.service';


@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styles: [
  ]
})
export class ColoresComponent implements OnInit, OnDestroy {
  
  public totalColores: number = 0;
  public colores: Color[] = [];
  public coloresTemp: Color[] = []; 

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private coloresService: ColorService,
              private modalColorService: ModalColorService) {}
  
  ngOnInit(): void {
    console.log("jejejjeej");
    this.cargarCategoria();
  }
  ngOnDestroy(): void{

  }
  cargarCategoria(){

    this.cargando = true;
    this.coloresService.cargarColor( this.desde )
        .subscribe( ({ total, colores }) => {
          this.totalColores = total;
          this.colores      = colores;
          this.coloresTemp  = colores;
          this.cargando      = false;
        })
  }

  nuevoColor(){
    this.modalColorService.abrirModal();
  }

}
