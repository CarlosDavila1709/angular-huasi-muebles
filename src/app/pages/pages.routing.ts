
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { OrdencompraComponent } from './compras/ordenes/ordencompra.component';
import { ProveedoresComponent } from './contactos/proveedores/proveedores.component';
import { OrdenComponent } from './compras/ordenes/orden/orden.component';

import { PagesComponent } from './pages.component';
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
import { ListaproyectosdocumentosComponent } from './proyectos/lista-proyectos-documentacion/listaproyectosdocumentos.component';


const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data:{ titulo:"Dashboard" } },
            { path: 'progress', component: ProgressComponent, data:{ titulo:"ProgressBar" } },
            { path: 'clientes', component: ProgressComponent, data:{ titulo:"Clientes" } },
            { path: 'proveedores', component: ProveedoresComponent, data:{ titulo:"Proveedores" } },
            { path: 'ordenes', component: OrdencompraComponent, data:{ titulo:"Lista ordenes de compra" } },
            { path: 'orden/:uidOrden', component: OrdenComponent, data:{ titulo:"" } },
            { path: 'neworden', component: NewordenComponent, data:{ titulo:"" } },
            { path: 'categoria', component: CategoriasComponent, data:{ titulo:"" } },
            { path: 'marca', component: MarcasComponent, data:{ titulo:"" } },
            { path: 'color', component: ColoresComponent, data:{ titulo:"" } },
            { path: 'modelo', component: ModeloComponent, data:{ titulo:"" } },
            { path: 'material', component: MaterialesComponent, data:{ titulo:"" } },
            { path: 'almacen', component: AlmacenesComponent, data:{ titulo:"" } },
            { path: 'traslados', component: TrasladosComponent, data:{ titulo:"" } },
            { path: 'traslado-central/:uidOrden', component: TrasladoCentralComponent, data:{ titulo:"" } },
            { path: 'almacen-detalle/:uidAlmacen', component: AlmacendetalleComponent, data:{ titulo:"" } },
            { path: 'proyectos', component: ListaproyectosComponent, data:{ titulo:"" } },
            { path: 'proyectos/documentos', component: ListaproyectosdocumentosComponent, data:{ titulo:"" } },
            { path: 'newproyecto', component: CrearproyectoComponent, data:{ titulo:"" } },
            { path: 'actualizarproyecto', component: ActualizarproyectoComponent, data:{ titulo:"" } },
        ]
    },

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule {}
