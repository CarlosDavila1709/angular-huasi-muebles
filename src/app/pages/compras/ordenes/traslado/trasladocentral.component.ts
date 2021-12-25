import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orden } from 'src/app/models/orden.model';
import { OrdenesCompraService } from 'src/app/services/ordenescompra.service';

import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-trasladocentral',
  templateUrl: './trasladocentral.component.html',
  styles: [
  ]
})
export class TrasladoCentralComponent implements OnInit, OnDestroy {
  

  public ordenTmp: Orden;

  constructor(private router: Router,private activatedRoute: ActivatedRoute, 
                private ordencompraService: OrdenesCompraService) {}
  
  ngOnInit(): void {
        //esto chapa el id de la url el nombre id tiene que ser igual del page.routing
        this.activatedRoute.params
        .subscribe( ({ uidCompra }) => {
          console.log(uidCompra);
          console.log(uidCompra);
          this.cargarOrdenCompra(uidCompra);
        });
  }
  ngOnDestroy(): void{

  }
  
  cargarOrdenCompra( id: string ){
      
    if(id == ''){
      return;
    }

    this.ordencompraService.obtenerOrdenCompraPorUid(id)
    .pipe(
      delay(100)
    )
    .subscribe( orden => {

      this.ordenTmp = orden;

    });

  }

  mostrarModalTraslado(){
      
  }
}
