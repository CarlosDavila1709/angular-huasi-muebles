import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PlanillaEmpleado } from 'src/app/models/planillaempleado.model';
import { PlanillaEmpleadoService } from 'src/app/services/planilla-empleado.service';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-planilla',
  templateUrl: './planilla.component.html',
  styles: [
  ]
})


export class PlanillaComponent implements OnInit, OnDestroy {


  public totalPlanillas: number = 0;
  public planillas: PlanillaEmpleado[] = [];
  public planillasTemp: PlanillaEmpleado[] = [];

  public desde: number = 0;
  public cargando: boolean = true;


  constructor( private fb: FormBuilder, public planillaEmpleadoService: PlanillaEmpleadoService,){}


  ngOnInit(): void {
    this.cargarPlanilla();
    this.cargarCalendarioSemanal();
  }
  ngOnDestroy(): void{

  }


  cargarPlanilla(){
    this.cargando = true;
    this.planillaEmpleadoService.cargarPlanilla(this.desde)
    .subscribe(
      ({ total, planillas }) => {
        this.totalPlanillas = total;
        this.planillas      = planillas;
        this.cargando      = false;
      }
    );

  }

  cargarCalendarioSemanal(){
    $( "#datepicker" ).datepicker({
      showWeek: true,
      firstDay: 1,
      currentText: 'Hoy',
      monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
      dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
      format: 'ddd dd/mm/yyyy',
    });
  }

  mostrarPlanilla(planilla:PlanillaEmpleado){
    planilla.isActualizar = true;
  }
  actualizarPlanilla(planilla:PlanillaEmpleado){
    console.log("-----actualizar planilla-----");
    this.cargarPlanilla();
  }
  eliminarPlanilla(planilla:PlanillaEmpleado){
    console.log("-----elimnar planilla-----");
  }
  CancelarEliminacion(planilla:PlanillaEmpleado){
    console.log("-----cancelar planilla-----");
    this.cargarPlanilla();
  }

  regresar(){
    this.planillaEmpleadoService.regresarBuscarProyectosTareo();
  }

}
