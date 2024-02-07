import api from "./api"

export async function buscarEspecialista(estado: string, especialidade: string) {
    if (!estado || !especialidade) { return null }

    try {
        const result = await api.get('/especialista/busca', {
            params: {
                estado, especialidade
            }
        })
        console.log('buscarEspecialista -> ', result.data)

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