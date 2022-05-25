import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Planilla } from 'src/app/models/planilla.model';
import { ModalSemanaPersonalService } from 'src/app/services/modal-semana-personal.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-semana-personal',
  templateUrl: './modal-semana-personal.component.html',
  styles: [
  ]
})

export class ModalSemanaPersonalComponent implements OnInit {

  public totalPlanillas: number = 0;
  public planillas: Planilla[] = [];

  public desde: number = 0;
  public cargando: boolean = true;

  public isActualizar:boolean = false;

  constructor( private fb: FormBuilder, public modalSemanaPersonalService: ModalSemanaPersonalService){}


  ngOnInit(): void {
    this.cargarPlanilla();
  }

  cerrarModal() {

    this.modalSemanaPersonalService.cerrarModal();
  }

  cargarPlanilla(){
    this.cargando = true;
    this.modalSemanaPersonalService.cargarPlanilla(this.desde)
    .subscribe(
      ({ total, planillas }) => {
        this.totalPlanillas = total;
        this.planillas      = planillas;
        this.cargando      = false;
      }
    );
  }

  mostrarPlanilla(planilla:Planilla){
    planilla.isActualizar = true;
  }
  actualizarPlanilla(planilla:Planilla){
    console.log("-----actualizar planilla-----");
    this.cargarPlanilla();
  }
  eliminarPlanilla(planilla:Planilla){
    console.log("-----elimnar planilla-----");
  }
  CancelarEliminacion(planilla:Planilla){
    console.log("-----cancelar planilla-----");
    this.cargarPlanilla();
  }
  agregarPersonal(){

    interface PlanillaPersonal{
      uid: string,
      nombres: string,
      apellidos: string,
      documento: string,
      numeroDocumento: string
    }
    const planillaPersonal: PlanillaPersonal = {
      uid: '798798798',
      nombres: 'Carlos',
      apellidos: '',
      documento: '',
      numeroDocumento: ''
    };

    const nuevaPlanilla = new Planilla("213132",planillaPersonal,"","","","","","","","","","","","");

    this.planillas.push(nuevaPlanilla);
    this.totalPlanillas = this.planillas.length;
    this.cargando      = false;
  }
}
