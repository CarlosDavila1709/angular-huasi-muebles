
export class Inventario{

  constructor(
      public uid: string,
      public name?: string,
      public categoria?: _Categoria,
      public modelo?: _Modelo,
      public material?: _Material,
      public almacen?: _Almacen,
      public fechaIngreso?: string,
      public stock?: number,
      public medida?: string
  ){}

}

interface _Almacen{
  uid: string,
  name: string,
}
interface _Categoria{
  uid: string,
  name: string,
}
interface _Material{
  uid: string,
  name: string,
  description: string,
}
interface _Modelo{
  uid: string,
  name: string,
  description: string,
}
