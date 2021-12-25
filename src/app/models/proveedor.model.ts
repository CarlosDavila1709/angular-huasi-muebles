import { environment } from '../../environments/environment'

const base_url = environment.base_url;

export class Proveedor{

    constructor(
        public razonSocial: string,
        public contacto: string,
        public direccion: string,
        public telefono: string,
    ){ }
}