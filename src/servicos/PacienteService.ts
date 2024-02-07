import api from "./api"
import { Paciente } from "../utils/interfaces"

export async function cadastrarPaciente(paciente: Paciente) {
    if (!paciente) { return null }

    try {
        const result = await api.post('/paciente', paciente)

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