import api from "./api";

export async function agendarConsulta(data: Date, especialistaId: string, pacienteId: string) {
    try {
        const result = await api.post('/consulta', {
            expecialistaId: especialistaId,
            pacienteId: pacienteId,
            data: data
        })

        return result.data
    } catch (error) {
        console.log(error)
    }
}