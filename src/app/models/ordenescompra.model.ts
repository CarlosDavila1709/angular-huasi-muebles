import { environment } from '../../environments/environment'

const base_url = environment.base_url;

export class Ordenescompra{

    constructor(
        public numeroCorrelativo: String,
        public proveedor: string,
        public contacto: string,
        public fechaRegistro: string,
        public estado: string,
        public montoTotal: string,
        public subTotal: string,
        public totalIgv: string,
        public codigoMoneda: string,
        public uid : string ,
    ){ }
}
