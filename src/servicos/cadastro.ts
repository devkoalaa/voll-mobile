import api from "./api"
import { FormData } from "../utils/interfaces"

export async function cadastro(formData: FormData, planos: number[]) {
    if (!formData) { return null }

    const newPaciente = {
        cpf: formData.cpf,
        nome: formData.nome,
        email: formData.email,
        estaAtiv: true,
        endereco: {
            cep: Number(formData.endereco.cep),
            rua: formData.endereco.rua,
            numero: Number(formData.endereco.numero),
            complemento: formData.endereco.complemento,
            estado: formData.endereco.estado
        },
        senha: formData.senha,
        telefone: Number(formData.telefone),
        possuiPlanoSaude: true,
        planosSaude: planos,
        imagem: formData.imagem,
        historico: []
    }

    console.log('newPaciente:', newPaciente)

    try {
        const result = await api.post('/paciente', newPaciente)

        return result.data
    } catch (error) {
        console.error('error cadastro', error)

        return null
    }
}