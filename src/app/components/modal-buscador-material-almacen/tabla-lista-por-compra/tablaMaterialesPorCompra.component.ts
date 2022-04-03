import { Component, OnInit, Input } from '@angular/core';
import { Inventario } from 'src/app/models/inventario/inventario';
import { InventarioService } from 'src/app/services/inventario.service';


@Component({
  selector: 'app-tabla-materiales-por-compra',
  templateUrl: './tablaMaterialesPorCompra.Component.html',
  styles: [
  ]
})

export class TablaMaterialesPorCompraComponent implements OnInit {

  public inventarioList: Inventario[] = [];
  public inventarioListTmp: Inventario[] = [];

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
