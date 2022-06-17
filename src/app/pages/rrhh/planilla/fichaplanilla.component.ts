import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PlanillaEmpleadoService } from 'src/app/services/planilla-empleado.service';


@Component({
  selector: 'app-fichaplanilla',
  templateUrl: './fichaplanilla.component.html',
  styles: [
  ]
})
export class FichaplanillaComponent implements OnInit, OnDestroy {



  constructor( private router: Router,
               private fb: FormBuilder,
               public planillaEmpleadoService: PlanillaEmpleadoService){

  }
  ngOnInit(): void {

  }
  ngOnDestroy(): void{

  }

  mostrarPlanilla(){
    this.router.navigateByUrl(`/dashboard/rrhh/planilla/planilla`);
  }

  mostrar(){
    this.planillaEmpleadoService.mostrarFormularioPlanilla();
  }
}
