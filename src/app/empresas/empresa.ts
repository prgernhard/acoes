export class Empresa {

    id: number = Math.round(Math.random() * 1000);
    nome: string = "";
    cnpj: string = "";
    tipoEmpresa: string = "";
    data: Date = new Date();

    constructor() {

    }

}
