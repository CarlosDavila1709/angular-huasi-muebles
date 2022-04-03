import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { Inventario } from '../models/inventario/inventario';

@Injectable({
  providedIn: 'root'
})

export class InventarioService {

  constructor( private http: HttpClient,
    private router: Router,
    private ngZone: NgZone ) {

  }

  get headers(){
    return {
      headers: {
        'x-token': "this.token"
      }
    }
  }

  buscar( termino: string = '' ) {

    //const url = `${ base_url }/todo/coleccion/${ termino }`;

    const url = "../../assets/data-test/inventario-almacen.json";

    console.log(url);
    return this.http.get<any[]>( url, this.headers )
              .pipe(
                map( ( resp: any ) => {
                  console.log("resp: "+resp);
                  return resp.inventario.map(
                    inv => new Inventario(inv.uid,
                                                 inv.name,
                                                 inv.categoria,
                                                 inv.modelo,
                                                 inv.material,
                                                 inv.almacen,
                                                 inv.fechaIngreso,
                                                 inv.stock,
                                                 inv.medida
                                             )
                  );
                })
              );
  }
}
