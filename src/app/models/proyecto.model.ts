import { environment } from '../../environments/environment'

const base_url = environment.base_url;

export class Proyecto{
  constructor(
    public numeroProyecto: string,
    public nombre: string,
    public fechaRegistro: string,
    public fechaInicio: string,
    public fechaFinalizacion: string,
    public estado: string,
    public cliente: string,
  ){}
}
