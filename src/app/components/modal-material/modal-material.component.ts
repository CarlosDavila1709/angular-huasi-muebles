import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria.model';
import { Color } from 'src/app/models/color.model';
import { Marca } from 'src/app/models/marca.model';
import { Modelo } from 'src/app/models/modelo.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ColorService } from 'src/app/services/color.service';
import { MarcaService } from 'src/app/services/marca.service';
import { ModalMaterialService } from 'src/app/services/modal-material.service';
import { ModeloService } from 'src/app/services/modelo.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-material',
  templateUrl: './modal-material.component.html',
  styles: [
  ]
})
export class ModalMaterialComponent implements OnInit {

  public materialForm: FormGroup;
  public categorias: Categoria[];
  public marcas: Marca[];
  public modelos: Modelo[];
  public colores: Color[];

  constructor( private fb: FormBuilder,
                private categoriaService: CategoriaService,
                private marcaService: MarcaService,
                private modeloService: ModeloService,
                private colorService: ColorService,
                public modalMaterialService: ModalMaterialService) { }

  ngOnInit(): void {
    this.materialForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoria: ['', Validators.required],
      modelo: ['', Validators.required],
      marca: ['', Validators.required],
      color: ['', Validators.required],
    });


    this.cargarCategorias();
    this.cargarMarcas();
    this.cargarModelos();
    this.cargarColores();
  }

  cerrarModal() {

    this.modalMaterialService.cerrarModal();

  }

  guardarMaterial(){

  }


  cargarCategorias(){

    this.categoriaService.cargarCategorias()
      .subscribe( (categorias: Categoria[]) =>{
        this.categorias = categorias;
      } );

  }

  cargarMarcas(){
    this.marcaService.cargarMarcas()
      .subscribe( (marcas: Marca[]) => {
        console.log("ingresa..."+marcas.length);
        this.marcas = marcas;
      } );
  }

  cargarModelos(){
    this.modeloService.cargarModelos()
      .subscribe( (modelos: Modelo[]) => {
        console.log("ingresa..."+modelos.length);
        this.modelos = modelos;
      } );
  }

  cargarColores(){
    this.colorService.cargarColores()
      .subscribe( (colores: Color[]) => {
        console.log("ingresa..."+colores.length);
        this.colores = colores;
      } );
  }
}
