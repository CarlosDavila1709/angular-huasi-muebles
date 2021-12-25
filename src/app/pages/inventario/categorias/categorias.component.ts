import { Component, OnDestroy, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';

import { ModalCategoriaService } from 'src/app/services/modal-categoria.service';

import { CategoriaService } from '../../../services/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styles: [
  ]
})
export class CategoriasComponent implements OnInit, OnDestroy {
  
  public totalCategorias: number = 0;
  public categorias: Categoria[] = [];
  public categoriasTemp: Categoria[] = []; 

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private categoriasService: CategoriaService,
              private modalCategoriaService: ModalCategoriaService) {}
  
  ngOnInit(): void {
    this.cargarCategoria();
  }
  ngOnDestroy(): void{

  }
  cargarCategoria(){

    this.cargando = true;
    this.categoriasService.cargarCategoria( this.desde )
        .subscribe( ({ total, categorias }) => {
          this.totalCategorias = total;
          this.categorias      = categorias;
          this.categoriasTemp  = categorias;
          this.cargando        = false;
        })
  }

  nuevaCategoria(){
    this.modalCategoriaService.abrirModal();
  }

}
