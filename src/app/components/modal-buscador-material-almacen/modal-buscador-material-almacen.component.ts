import { Component, OnInit } from '@angular/core';
import { Inventario } from 'src/app/models/inventario/inventario';
import { InventarioService } from 'src/app/services/inventario.service';
import { ModalBuscadorMaterialAlmacenService } from 'src/app/services/modal-buscador-material-almacen.service';

@Component({
  selector: 'app-modal-buscador-material-almacen',
  templateUrl: './modal-buscador-material-almacen.component.html',
  styles: [
  ]
})
export class ModalBuscadorMaterialAlmacenComponent implements OnInit {

  public inventarioList: Inventario[] = [];
  public inventarioListTmp: Inventario[] = [];
  public uidAlmacen:string;
  tipoBuscador:string;

  constructor(public modalBuscadorMaterialAlmacenService: ModalBuscadorMaterialAlmacenService,
              private inventarioService: InventarioService  ){

  }
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

  cerrarModal(){
    this.modalBuscadorMaterialAlmacenService.cerrarModal();
  }

  seleccionTipoBuscado(e){
    console.log(e.target.value);
    var opcionSeleccionado = e.target.value;
    if(opcionSeleccionado == 1){
      this.tipoBuscador = "BUSC_NOMBRE";
    }
    if(opcionSeleccionado == 2){
      this.tipoBuscador = "BUSC_COMPRA";
    }

  }
}
