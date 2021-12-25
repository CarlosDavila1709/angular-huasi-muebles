import { Component, OnDestroy, OnInit } from '@angular/core';
import { Tecnico } from 'src/app/models/tecnico.model';

import { TecnicoService } from '../../../services/tecnico.service';

@Component({
  selector: 'app-tecnicos',
  templateUrl: './tecnicos.component.html',
  styles: [
  ]
})
export class TecnicosComponent implements OnInit, OnDestroy {
  
  public totalTecnicos: number = 0;
  public tecnicos: Tecnico[] = [];
  public tecnicosTemp: Tecnico[] = []; 

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private tecnicoService: TecnicoService) {}
  
  ngOnInit(): void {
    console.log("jejejjeej");
    this.cargarTecnicos();
  }
  ngOnDestroy(): void{

  }
  cargarTecnicos(){

    this.cargando = true;
    this.tecnicoService.cargarTecnicos( this.desde )
        .subscribe( ({ total, tecnicos }) => {
          this.totalTecnicos = total;
          this.tecnicos      = tecnicos;
          this.tecnicosTemp  = tecnicos;
          this.cargando      = false;
        })
  }

}
