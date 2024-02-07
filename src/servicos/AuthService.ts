import api from "./api"

export async function login(email: string, password: string) {
    if (!email || !password) { return null }

    try {
        const result = await api.post('/auth/login', {
            email: email,
            senha: password
        })

        console.log('login -> ', result.data)

        return result.data
    } catch (error) {
        if (error.isAxiosError) {

            return {
                error: true,
                message: error.message
            }
        }
    }
}