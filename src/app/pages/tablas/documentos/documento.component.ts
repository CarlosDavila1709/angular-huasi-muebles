import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cargo } from 'src/app/models/cargo.model';
import { CargoService } from 'src/app/services/cargo.service';
import { DocumentoService } from 'src/app/services/documento.service';
import { ModalCargoService } from 'src/app/services/modal-cargo.service';


@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styles: [
  ]
})
export class DocumentoComponent implements OnInit, OnDestroy {

  public totalDocumentos: number = 0;
  public documentos: Cargo[] = [];
  public documentosTemp: Cargo[] = [];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private documentoService: DocumentoService,
              private modalCargoService: ModalCargoService) {}

  ngOnInit(): void {

    this.cargarDocumentos();
  }
  ngOnDestroy(): void{

  }
  cargarDocumentos(){

    this.cargando = true;
    this.documentoService.cargarDocumentos( this.desde )
        .subscribe( ({ total, documentos }) => {
          this.totalDocumentos = total;
          this.documentos      = documentos;
          this.documentosTemp  = documentos;
          this.cargando      = false;
        })
  }

  nuevoCargo(){
    this.modalCargoService.abrirModal();
  }

}
