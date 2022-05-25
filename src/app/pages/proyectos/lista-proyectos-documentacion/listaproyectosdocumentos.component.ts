import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoDocumentos } from 'src/app/models/proyectodocumentos';
import { ProyectosDocumentosService } from 'src/app/services/proyectos-documentos.service';



@Component({
  selector: 'app-listaproyectosdocumentos',
  templateUrl: './listaproyectosdocumentos.component.html',
  styles: [
  ]
})
export class ListaproyectosdocumentosComponent implements OnInit, OnDestroy {

  public totalProyectos: number = 0;
  public proyectos: ProyectoDocumentos[] = [];
  public proyectosTemp: ProyectoDocumentos[] = [];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private router: Router,
    private proyectosDocumentosService: ProyectosDocumentosService
    ){

  }

  ngOnInit(): void {
    this.cargarProyectosDocumentos();
  }
  ngOnDestroy(): void{

  }

  cargarProyectosDocumentos(){
    this.cargando = true;
    this.proyectosDocumentosService.cargarProyectosDocumentos( this.desde )
    .subscribe( ({ total, proyectos }) => {
      this.totalProyectos = total;
      this.proyectos      = proyectos;
      this.proyectosTemp  = proyectos;
      this.cargando      = false;
    })
  }

  actualizar(proyectos: ProyectoDocumentos){

  }

  eliminar(proyectos: ProyectoDocumentos){

  }

}
