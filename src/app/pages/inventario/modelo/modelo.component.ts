import { Component, OnDestroy, OnInit } from '@angular/core';
import { Modelo } from 'src/app/models/modelo.model';
import { ModeloService } from 'src/app/services/modelo.service';
import { ModalModeloService } from 'src/app/services/modal-modelo.service';


@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styles: [
  ]
})
export class ModeloComponent implements OnInit, OnDestroy {
  
  public totalModelos: number = 0;
  public modelos: Modelo[] = [];
  public modelosTemp: Modelo[] = []; 

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private modeloService: ModeloService,
              private modalModeloService: ModalModeloService) {}
  
  ngOnInit(): void {
    console.log("jejejjeej");
    this.cargarModelo();
  }
  ngOnDestroy(): void{

  }
  cargarModelo(){

    this.cargando = true;
    this.modeloService.cargarModelo( this.desde )
        .subscribe( ({ total, modelos }) => {
          this.totalModelos = total;
          this.modelos      = modelos;
          this.modelosTemp  = modelos;
          this.cargando      = false;
        })
  }

  nuevoModelo(){
    this.modalModeloService.abrirModal();
  }

}
