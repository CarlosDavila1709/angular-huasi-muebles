import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { delay } from 'rxjs/operators';
import { Cliente } from 'src/app/models/cliente.model';
import { Orden } from 'src/app/models/orden.model';
import { OrdenesCompraService } from 'src/app/services/ordenescompra.service';
import { environment } from 'src/environments/environment';

import Swal from 'sweetalert2';

const base_url = environment.base_url;

@Component({
    selector: 'app-orden',
    templateUrl: './orden.component.html',
    styles: [
    ]
  })

export class OrdenComponent implements OnInit, OnDestroy {

    public ordenForm: FormGroup;
    public ordenTmp: Orden;
    public clienteTmp: Cliente;

    public urlImageSoa: String = "";
    public urlImageCriminalRecord: String = "";
    public urlImageFaceDriver: String = "";
    public urlImageIdentidad: String = "";
    public urlImageVehiculo: String = "";

    constructor(
      private router: Router,
      private fb: FormBuilder,
      private ordencompraService: OrdenesCompraService,
      private activatedRoute: ActivatedRoute) {}
    
    ngOnInit(): void {
        //esto chapa el id de la url el nombre id tiene que ser igual del page.routing
        this.activatedRoute.params
        .subscribe( ({ uidCompra }) => {
          console.log(uidCompra);
          console.log(uidCompra);
          this.cargarOrdenCompra(uidCompra);
        });

        this.ordenForm = this.fb.group({
          uid: ['', Validators.required],
          name: ['', Validators.required],
          lastName: ['', Validators.required],
          typeDocument: ['', Validators.required],
          numberDocument: ['', Validators.required],
          status: ['', Validators.required],
          imageSoa: ['', Validators.required],
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

}
