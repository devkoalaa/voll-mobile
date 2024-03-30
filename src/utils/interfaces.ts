export interface Paciente {
    cpf: string,
    nome: string,
    email: string,
    endereco: Endereco,
    senha: string,
    telefone: number,
    possuiPlanoSaude: boolean,
    planosSaude?: number[],
    imagem?: string,
    // estaAtivo: boolean,
    // historico: string
}

export interface Endereco {
    cep: string,
    rua: string,
    numero: number,
    complemento?: string,
    estado: string
}

export interface Especialista {
    id: string,
    nome: string,
    // crm: string,
    imagem: string,
    especialidade: string,
    // email: string,
    // telefone: string,
    // possuiPlanoSaude: true,
    // planosSaude: number[],
    // avaliacoes: string[]
}