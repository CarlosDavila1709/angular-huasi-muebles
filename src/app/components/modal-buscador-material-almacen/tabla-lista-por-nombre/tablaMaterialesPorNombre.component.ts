import { Component, OnInit, Input } from '@angular/core';
import { Inventario } from 'src/app/models/inventario/inventario';
import { InventarioService } from 'src/app/services/inventario.service';



@Component({
  selector: 'app-tabla-materiales-por-nombre',
  templateUrl: './tablaMaterialesPorNombre.Component.html',
  styles: [
  ]
})
export class TablaMaterialesPorNombreComponent implements OnInit {

  public inventarioList: Inventario[] = [];
  public inventarioListTmp: Inventario[] = [];

  @Input() uidAlmacen: string;

  constructor(private inventarioService: InventarioService){}

  ngOnInit(): void {
  }

  buscar( termino: string ) {
    if( termino.length === 0 ){
      return this.inventarioList = this.inventarioListTmp;
    }

    this.inventarioService.buscar(termino)
        .subscribe( (resultados: Inventario[]) => {
            this.inventarioList = resultados;
        } );
  }

}
