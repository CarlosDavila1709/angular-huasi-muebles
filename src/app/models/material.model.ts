import { environment } from '../../environments/environment'

const base_url = environment.base_url;


interface _MaterialCategoria{
    uid: string,
    name: string,
    description: string,
}
interface _MaterialMarca{
    uid: string,
    name: string,
    description: string,
}
interface _MaterialColor{
    uid: string,
    name: string,
    description: string,
}
interface _MaterialModelo{
    uid: string,
    name: string,
    description: string,
}

export class Material{

    constructor(
        public uid: string,
        public name?: string,
        public reference?: string,
        public description?: string,
        public categoria?: _MaterialCategoria,
        public marca?: _MaterialMarca,
        public color?: _MaterialColor,
        public modelo?: _MaterialModelo,
    ){}
}