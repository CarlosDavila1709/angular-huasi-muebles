export class PlanillaEmpleado{

  constructor(
    public uid: string,
    public personal?: PlanillaPersonal,
    public lunes?: string,
    public martes?: string,
    public miercoles?: string,
    public jueves?: string,
    public viernes?: string,
    public sabado?: string,
    public domingo?: string,
    public totalTurnos?: string,
    public sueldo?: string,
    public adelanto?: string,
    public bono?: string,
    public totalSueldo?: string,
    public totalApagar?: string,
    public isActualizar: boolean = false){}
}


interface PlanillaPersonal{
  uid: string,
  nombres: string,
  apellidos: string,
  documento: string,
  numeroDocumento: string,
  cargo: string
}
