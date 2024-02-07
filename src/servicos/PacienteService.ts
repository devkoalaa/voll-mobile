import api from "./api"
import { Paciente } from "../utils/interfaces"

export async function cadastrarPaciente(paciente: Paciente) {
    if (!paciente) { return null }

    // const newPaciente = {
    //     cpf: formData.cpf,
    //     nome: formData.nome,
    //     email: formData.email,
    //     estaAtivo: true,
    //     endereco: {
    //         cep: Number(formData.endereco.cep),
    //         rua: formData.endereco.rua,
    //         numero: Number(formData.endereco.numero),
    //         complemento: formData.endereco.complemento,
    //         estado: formData.endereco.estado
    //     },
    //     senha: formData.senha,
    //     telefone: Number(formData.telefone),
    //     possuiPlanoSaude: true,
    //     planosSaude: formData.planosSaude,
    //     imagem: formData.imagem,
    //     historico: [""]
    // }

    console.log('formData:', paciente)

    try {
        const result = await api.post('/paciente', paciente)
        console.log('result:', result.data)

        return result.data
    } catch (error) {
        console.error('error cadastro', error)

        return null
    }
}