import { environment } from '../../environments/environment'
import { Cliente } from './cliente.model';

const base_url = environment.base_url;

interface OrdenCliente{
     uid: string,
     razonSocial?: string,
     direccion?: string,
     contacto?: string,
     ruc?: string,
}
interface OrdenItems{
    uid: string,
    reference?: string,
    name?: string,
    description?: string,
    price?: string,
    discount?:string,
    quantity?: string,
    total?:string,
}
export class Orden{

    constructor(
        public uid: string,
        public numeroCorrelativo?: string,
        public fechaCompra?: string,
        public montoCompra?: string,
        public totalIgv?: string,
        public subTotal?: string,
        public status?: string,
        public cliente?: OrdenCliente,
        public items?: OrdenItems,
    ){}
}