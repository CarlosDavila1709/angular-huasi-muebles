import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PlanillaEmpleado } from 'src/app/models/planillaempleado.model';
import { ModalActualizarPlanillaService } from 'src/app/services/modal-actualizar-planilla.service';
import { PlanillaEmpleadoService } from 'src/app/services/planilla-empleado.service';

@Component({
  selector: 'app-planillaempleado',
  templateUrl: './planillaempleado.component.html',
  styles: [
  ]
})

export class PlanillaempleadoComponent implements OnInit, OnDestroy {

  public totalPlanillas: number = 0;
  public planillas: PlanillaEmpleado[] = [];
  public planillasTemp: PlanillaEmpleado[] = [];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor( private fb: FormBuilder,
                public planillaEmpleadoService: PlanillaEmpleadoService,
                private modaActualizarPlanillaService: ModalActualizarPlanillaService){}

  ngOnInit(): void {
    this.cargarPlanilla();
  }
  ngOnDestroy(): void{

  }

  cerrarModal() {

    this.planillaEmpleadoService.cerrarModal();
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

  mostrarModalDetallePlanilla(){
    console.log("-----cancelar mostrarModalDetallePlanilla-----");
    this.modaActualizarPlanillaService.abrirModal();
  }
}
