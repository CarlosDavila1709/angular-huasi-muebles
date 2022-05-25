import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto.model';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-listaproyectos',
  templateUrl: './listaproyectos.component.html',
  styles: [
  ]
})
export class ListaproyectosComponent implements OnInit, OnDestroy {

  public totalProyectos: number = 0;
  public proyectos: Proyecto[] = [];
  public proyectosTemp: Proyecto[] = [];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private router: Router,
              private proyectoService: ProyectosService
              ){

  }

  ngOnInit(): void {
    this.cargarProyectos();
  }
  ngOnDestroy(): void{

  }

  cargarProyectos(){
    this.cargando = true;
    this.proyectoService.cargarProyectos( this.desde )
    .subscribe( ({ total, proyectos }) => {
      this.totalProyectos = total;
      this.proyectos      = proyectos;
      this.proyectosTemp  = proyectos;
      this.cargando      = false;
    })
  }

  nuevoProyecto(){
    this.router.navigateByUrl(`/dashboard/newproyecto`);
  }

  actualizarProyecto(){
    this.router.navigateByUrl(`/dashboard/actualizarproyecto`);
  }

}
