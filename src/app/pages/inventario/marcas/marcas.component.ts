import { Component, OnDestroy, OnInit } from '@angular/core';
import { Marca } from 'src/app/models/marca.model';
import { MarcaService } from 'src/app/services/marca.service';
import { ModalMarcaService } from 'src/app/services/modal-marca.service';


@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styles: [
  ]
})
export class MarcasComponent implements OnInit, OnDestroy {
  
  public totalMarcas: number = 0;
  public marcas: Marca[] = [];
  public marcasTemp: Marca[] = []; 

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private marcasService: MarcaService,
              private modalMarcaService: ModalMarcaService) {}
  
  ngOnInit(): void {
    console.log("jejejjeej");
    this.cargarMarcas();
  }
  ngOnDestroy(): void{

  }
  cargarMarcas(){

    this.cargando = true;
    this.marcasService.cargarMarca( this.desde )
        .subscribe( ({ total, marcas }) => {
          this.totalMarcas = total;
          this.marcas      = marcas;
          this.marcasTemp  = marcas;
          this.cargando      = false;
        })
  }

  nuevoColor(){
    this.modalMarcaService.abrirModal();
  }

}
