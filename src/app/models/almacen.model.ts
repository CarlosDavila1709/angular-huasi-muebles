import { environment } from '../../environments/environment'

const base_url = environment.base_url;

export class Almacen{

    constructor(
        public uid: string,
        public name?: string,
        public description?: string,
        public address?: string,
    ){}
}