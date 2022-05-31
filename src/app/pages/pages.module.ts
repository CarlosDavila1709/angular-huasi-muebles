import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms'

//Modulos
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TecnicosComponent } from './mantenimientos/tecnicos/tecnicos.component';
import { ProveedoresComponent } from './contactos/proveedores/proveedores.component';
import { OrdencompraComponent } from './compras/ordenes/ordencompra.component';
import { OrdenComponent } from './compras/ordenes/orden/orden.component';
import { NewordenComponent } from './compras/ordenes/neworden/neworden.component';
import { CategoriasComponent } from './inventario/categorias/categorias.component';
import { ColoresComponent } from './inventario/colores/colores.component';
import { MarcasComponent } from './inventario/marcas/marcas.component';
import { ModeloComponent } from './inventario/modelo/modelo.component';
import { MaterialesComponent } from './inventario/materiales/materiales.component';
import { AlmacenesComponent } from './inventario/almacenes/almacenes.component';
import { TrasladoCentralComponent } from './compras/ordenes/traslado/trasladocentral.component';
import { AlmacendetalleComponent } from './inventario/almacen-detalle/almacen-detalle.component';
import { TrasladosComponent } from './inventario/traslados/traslados.component';
import { ListaproyectosComponent } from './proyectos/lista-proyectos/listaproyectos.component';
import { CrearproyectoComponent } from './proyectos/crear-proyectos/crearproyecto.component';
import { ActualizarproyectoComponent } from './proyectos/actualizar-proyecto/actualizarproyecto.component';
import { ModalMaterialComponent } from './proyectos/actualizar-proyecto/modal-agregar-material/modal-material.component';
import { ModalSemanaPersonalComponent } from './proyectos/actualizar-proyecto/modal-semana-personal/modal-semana-personal.component';
import { ModalAgregarSemanaComponent } from './proyectos/actualizar-proyecto/modal-agregar-semana/modal-agregar-semana.component';
import { ListaproyectosdocumentosComponent } from './proyectos/lista-proyectos-documentacion/listaproyectosdocumentos.component';
import { PlanillaempleadoComponent } from './planilla/planilla-empleado/planillaempleado.component';
import { ModalActualizarPlanillaComponent } from './planilla/planilla-empleado/modal-actualizar-planilla/modal-actualizar-planilla.component';

@NgModule({
  declarations: [
    PagesComponent,
    ProgressComponent,
    DashboardComponent,
    TecnicosComponent,
    ProveedoresComponent,
    OrdencompraComponent,
    OrdenComponent,
    NewordenComponent,
    CategoriasComponent,
    ColoresComponent,
    MarcasComponent,
    ModeloComponent,
    MaterialesComponent,
    AlmacenesComponent,
    TrasladoCentralComponent,
    AlmacendetalleComponent,
    TrasladosComponent,
    ListaproyectosComponent,
    CrearproyectoComponent,
    ActualizarproyectoComponent,
    ModalMaterialComponent,
    ModalSemanaPersonalComponent,
    ModalAgregarSemanaComponent,
    ListaproyectosdocumentosComponent,
    PlanillaempleadoComponent,
    ModalActualizarPlanillaComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
