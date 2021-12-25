import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { ModalBuscadorMaterialComponent } from './modal-buscador-material/modal-buscador-material.component';
import { ModalCategoriaComponent } from './modal-categoria/modal-categoria.component';
import { ModalColorComponent } from './modal-color/modal-color.component';
import { ModalMarcaComponent } from './modal-marca/modal-marca.component';
import { ModalModeloComponent } from './modal-modelo/modal-modelo.component';
import { ModalMaterialComponent } from './modal-material/modal-material.component';
import { ModalAlmacenComponent } from './modal-almacen/modal-almacen.component';
import { ModalTrasladoOrdenComponent } from './modal-traslado-orden/modal-traslado-orden.component';
import { ModalIngresoAlmacenComponent } from './modal-ingreso-almacen/modal-ingreso-almacen.component';



@NgModule({
    declarations: [
      IncrementadorComponent,
      ModalBuscadorMaterialComponent,
      ModalCategoriaComponent,
      ModalColorComponent,
      ModalMarcaComponent,
      ModalModeloComponent,
      ModalMaterialComponent,
      ModalAlmacenComponent,
      ModalTrasladoOrdenComponent,
      ModalIngresoAlmacenComponent,
    ],
    exports: [
      IncrementadorComponent,
      ModalBuscadorMaterialComponent,
      ModalCategoriaComponent,
      ModalColorComponent,
      ModalMarcaComponent,
      ModalModeloComponent,
      ModalMaterialComponent,
      ModalAlmacenComponent,
      ModalTrasladoOrdenComponent,
      ModalIngresoAlmacenComponent,
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule
    ]
  })
  export class ComponentsModule { }