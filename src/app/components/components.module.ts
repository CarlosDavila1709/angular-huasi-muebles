import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { ModalBuscadorMaterialComponent } from './modal-buscador-material/modal-buscador-material.component';
import { ModalBuscadorMaterialAlmacenComponent } from './modal-buscador-material-almacen/modal-buscador-material-almacen.component';
import { ModalCategoriaComponent } from './modal-categoria/modal-categoria.component';
import { ModalColorComponent } from './modal-color/modal-color.component';
import { ModalMarcaComponent } from './modal-marca/modal-marca.component';
import { ModalModeloComponent } from './modal-modelo/modal-modelo.component';
import { ModalMaterialComponent } from './modal-material/modal-material.component';
import { ModalAlmacenComponent } from './modal-almacen/modal-almacen.component';
import { ModalTrasladoOrdenComponent } from './modal-traslado-orden/modal-traslado-orden.component';
import { ModalIngresoAlmacenComponent } from './modal-ingreso-almacen/modal-ingreso-almacen.component';
import { TablaMaterialesPorNombreComponent } from './modal-buscador-material-almacen/tabla-lista-por-nombre/tablaMaterialesPorNombre.component';
import { TablaMaterialesPorCompraComponent } from './modal-buscador-material-almacen/tabla-lista-por-compra/tablaMaterialesPorCompra.component';


@NgModule({
    declarations: [
      IncrementadorComponent,
      ModalBuscadorMaterialComponent,
      ModalBuscadorMaterialAlmacenComponent,
      ModalCategoriaComponent,
      ModalColorComponent,
      ModalMarcaComponent,
      ModalModeloComponent,
      ModalMaterialComponent,
      ModalAlmacenComponent,
      ModalTrasladoOrdenComponent,
      ModalIngresoAlmacenComponent,
      TablaMaterialesPorNombreComponent,
      TablaMaterialesPorCompraComponent
    ],
    exports: [
      IncrementadorComponent,
      ModalBuscadorMaterialComponent,
      ModalBuscadorMaterialAlmacenComponent,
      ModalCategoriaComponent,
      ModalColorComponent,
      ModalMarcaComponent,
      ModalModeloComponent,
      ModalMaterialComponent,
      ModalAlmacenComponent,
      ModalTrasladoOrdenComponent,
      ModalIngresoAlmacenComponent,
      TablaMaterialesPorNombreComponent,
      TablaMaterialesPorCompraComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule
    ]
  })
  export class ComponentsModule { }
