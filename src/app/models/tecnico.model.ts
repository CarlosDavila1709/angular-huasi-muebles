import { environment } from '../../environments/environment'

const base_url = environment.base_url;

export class Tecnico{

    constructor(
        public nombre: string,
        public apellidos: string,
        public fechaNacimiento: string,
        public documento: string,
        public numeroDocumento: string,
        public telefono: string,
        public direccion: string,
        public email: string,
        public password?: string,
        public img?: string,
        public google?: boolean,
        public role?: string,
        public uid?: string,
    ){ }
}