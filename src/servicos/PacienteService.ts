import api from "./api"
import { Paciente } from "../utils/interfaces"

export async function cadastrarPaciente(paciente: Paciente) {
    if (!paciente) { return null }

    try {
        const result = await api.post('/paciente', paciente)
        console.log('cadastrarPaciente -> ', result.data)

        return result.data
    } catch (error) {
        if (error.isAxiosError) {

            return {
                error: true,
                message: error.message
            }
        }

        return null
    }
}

export async function getPaciente(id: string) {
    try {
        const result = await api.get(`/paciente/${id}`)
        console.log('getPaciente -> ', result.data)

        return result.data
    } catch (error) {
        if (error.isAxiosError) {

            return {
                error: true,
                message: error.message
            }
        }

        return null
    }


}