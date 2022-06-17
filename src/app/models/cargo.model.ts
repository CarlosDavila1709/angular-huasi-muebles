import { environment } from '../../environments/environment'

const base_url = environment.base_url;

export class Cargo{

    constructor(
        public uid: string,
        public name?: string,
        public description?: string,
        public sueldoDiario?: string,
        public uidMoneda?: string,
        public monedaPrefijo?: string,
    ){}
}