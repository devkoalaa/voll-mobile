export interface FormData {
    cpf: string,
    nome: string,
    email: string,
    estaAtiv: boolean,
    endereco: {
        cep: number,
        rua: string,
        numero: number,
        complemento: string,
        estado: string
    },
    senha: string,
    telefone: number,
    possuiPlanoSaude: boolean,
    planosSaude: [number],
    imagem: string,
    historico: [string]
}