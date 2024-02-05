import api from "./api"

export async function login(email: string, password: string) {
    if (!email || !password) { return null }

    try {
        const result = await api.post('/auth/login', {
            email: email,
            senha: password
        })

        return result.data
    } catch (error) {
        console.error('error login', error)

        return null
    }
}