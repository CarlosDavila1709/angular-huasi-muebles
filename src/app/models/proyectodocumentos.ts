export class ProyectoDocumentos{
  constructor(
    public numeroProyecto: string,
    public nombre: string,
    public cliente: string,
    public sede: string,
    public fechaRegistro: string,
    public estado: string,
    public estadoDoc: string,
    public estadoEO: string,
    public estadoOS: string,
    public estadoInforme: string,
    public estadoConf: string,
    public estadoFact: string,
  ){}
}
