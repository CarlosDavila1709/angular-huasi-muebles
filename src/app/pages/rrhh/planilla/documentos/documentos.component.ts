import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styles: [
  ]
})
export class DocumentosComponent implements OnInit, OnDestroy {

  ngOnInit(): void {

  }
  ngOnDestroy(): void{

  }
  constructor( private router: Router,private fb: FormBuilder){

  }
}
