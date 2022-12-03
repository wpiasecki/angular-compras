


export class Empresa {
    id: number;
    nome: string;
    cnpj: string;

    constructor(params: any) {
        this.id = params.id;
        this.nome = params.nome;
        this.cnpj = params.cnpj;
    }
}