import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SidebarService {
    menu: any[] = [
        {
          titulo: 'Principal',
          icono:  'mdi mdi-gauge',
          submenu: [
            { titulo: 'Main', url: '/'},
            { titulo: 'Gráficas', url: 'grafica1'},
            { titulo: 'rxjs', url: 'rxjs'},
            { titulo: 'Promesas', url: 'promesas'},
            { titulo: 'ProgressBar', url: 'progress'},
          ]
        },
        {
          titulo: 'Contactos',
          icono:  'mdi mdi-folder-lock-open',
          submenu: [
            { titulo: 'Clientes', url: 'clientes'},
            { titulo: 'Proveedores', url: 'proveedores'},
          ]
        },
        {
          titulo: 'Proyectos',
          icono:  'mdi mdi-folder-lock-open',
          submenu: [
            { titulo: 'Proyectos', url: 'proyectos'},
            { titulo: 'Documentos', url: 'proyectos/documentos'},
            { titulo: 'Planilla', url: 'planilla/empleados'},
          ]
        },
        {
          titulo: 'Compras',
          icono:  'mdi mdi-folder-lock-open',
          submenu: [
            { titulo: 'Ordenes Compra', url: 'ordenes'},
          ]
        },
        {
          titulo: 'Inventario',
          icono:  'mdi mdi-folder-lock-open',
          submenu: [
            { titulo: 'traslados', url: 'traslados'},
          ]
        },
        {
          titulo: 'Mante. Tablas',
          icono:  'mdi mdi-folder-lock-open',
          submenu: [
            { titulo: 'Almacenes', url: 'almacen'},
            { titulo: 'Material', url: 'material'},
            { titulo: 'Categoria', url: 'categoria'},
            { titulo: 'Marca', url: 'marca'},
            { titulo: 'Color', url: 'color'},
            { titulo: 'Modelo', url: 'modelo'},
          ]
        }
      ];
      constructor() { }
}
