import { PlanillaEmpleado } from "../models/planillaempleado.model";

export interface CargarPlanilla{
  total: number;
  planillas: PlanillaEmpleado[];
}
