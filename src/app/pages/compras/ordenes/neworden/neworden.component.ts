import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { delay } from 'rxjs/operators';
import { Material } from 'src/app/models/material.model';
import { ModalBuscadorMaterialService } from 'src/app/services/modal-buscador-material.service';

@Component({
    selector: 'app-neworden',
    templateUrl: './neworden.component.html',
    styles: [
    ]
  })

  export class NewordenComponent implements OnInit {
    
    public newOrdenForm: FormGroup;
    private materialNuevoSubs: Subscription;
    public materialesTmp: Material[] = [];

    constructor(private fb: FormBuilder,
                  private modalBuscadorMaterialService: ModalBuscadorMaterialService){}

    ngOnInit(): void {
      
      this.newOrdenForm = this.fb.group({
        
      });

      this.materialNuevoSubs = this.materialNuevoSubs = this.modalBuscadorMaterialService.nuevoMaterial
        .pipe( delay(100) )
        .subscribe( material => { 

          this.materialesTmp.push(material)
      
      });
    }


    guardarNewOrden(){

    }

    abrirModal(){
      this.modalBuscadorMaterialService.abrirModal();
    }
  }