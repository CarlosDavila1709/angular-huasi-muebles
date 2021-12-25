import { environment } from '../../environments/environment'

const base_url = environment.base_url;

export class Modelo{

    constructor(
        public uid: string,
        public name?: string,
        public description?: string,
    ){}
}