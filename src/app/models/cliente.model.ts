import { environment } from '../../environments/environment'

const base_url = environment.base_url;

export class Cliente{

    constructor(
        public uid: string,
        public razonSocial?: string,
        public direccion?: string,
        public contacto?: string,
        public ruc?: string,
    ){}
}