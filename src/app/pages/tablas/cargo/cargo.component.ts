import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cargo } from 'src/app/models/cargo.model';
import { CargoService } from 'src/app/services/cargo.service';
import { ModalCargoService } from 'src/app/services/modal-cargo.service';


@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styles: [
  ]
})
export class CargoComponent implements OnInit, OnDestroy {

  public totalCargos: number = 0;
  public cargos: Cargo[] = [];
  public cargosTemp: Cargo[] = [];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private cargoService: CargoService,
              private modalCargoService: ModalCargoService) {}

  ngOnInit(): void {

    this.cargarCargos();
  }
  ngOnDestroy(): void{

  }
  cargarCargos(){

    this.cargando = true;
    this.cargoService.cargarCargo( this.desde )
        .subscribe( ({ total, cargos }) => {
          this.totalCargos = total;
          this.cargos      = cargos;
          this.cargosTemp  = cargos;
          this.cargando      = false;
        })
  }

  nuevoCargo(){
    this.modalCargoService.abrirModal();
  }

}
