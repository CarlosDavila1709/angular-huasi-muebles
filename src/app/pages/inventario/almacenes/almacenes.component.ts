import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Almacen } from 'src/app/models/almacen.model';
import { ModalAlmacenService } from 'src/app/services/modal-almacen.service';
import { AlmacenesService } from '../../../services/almacenes.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './almacenes.component.html',
  styles: [
  ]
})
export class AlmacenesComponent implements OnInit, OnDestroy {

  public totalAlmacenes: number = 0;
  public almacenes: Almacen[] = [];
  public almacenesTemp: Almacen[] = [];

  public desde: number = 0;
  public cargando: boolean = true;

  public numeroFilas: number = 1;
  public numeroColumnas: number = 5;
  public almacenesTabla: Almacen[][] = [];

  constructor(private router: Router,
              private almacenesService: AlmacenesService,
              private modalAlmacenService: ModalAlmacenService) {}

  ngOnInit(): void {
    this.cargarAlmacenes();
  }
  ngOnDestroy(): void{

  }
  cargarAlmacenes(){

    this.cargando = true;
    this.almacenesService.cargarAlmacenes( this.desde )
        .subscribe( ({ total, almacenes }) => {
          this.totalAlmacenes = total;
          this.almacenes      = almacenes;
          this.almacenesTemp  = almacenes;
          this.cargando       = false;

          let arregloOriginal:Almacen[] = [];
          almacenes.forEach((value, index) => {
            arregloOriginal.push(value);
          });

          this.dividirArreglo(arregloOriginal);
        })
  }

  nuevoAlmacen(){
    this.modalAlmacenService.abrirModal();
  }

  siguientePagina(index:number, numeroPagina:number): boolean{

    var rem = (index+1)%numeroPagina;
    console.log("cociente: "+rem)
    if(  rem === 0 ){
      return true;
    }else{
      return false;
    }
  }
  dividirArreglo(arregloOriginal: Almacen[]){
    //let arregloOriginal = ["PHP", "JavaScript", "Go", "Rust", "Java", "C", "CSS", "Python"],
    let arregloDeArreglos = []; // Aquí almacenamos los nuevos arreglos
    console.log("Arreglo original: ", arregloOriginal);
    const LONGITUD_PEDAZOS = 4; // Partir en arreglo de 3
    for (let i = 0; i < arregloOriginal.length; i += LONGITUD_PEDAZOS) {
      let pedazo = arregloOriginal.slice(i, i + LONGITUD_PEDAZOS);
      arregloDeArreglos.push(pedazo);
    }
    this.almacenesTabla = arregloDeArreglos;
    console.log("Arreglo de arreglos: ", arregloDeArreglos);
  }

}
