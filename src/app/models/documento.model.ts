import { environment } from '../../environments/environment'

const base_url = environment.base_url;

export class Documento{

    constructor(
        public uid: string,
        public name?: string,
        public img?: string,
    ){}
}
