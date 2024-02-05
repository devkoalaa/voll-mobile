const sections = [
    {
        id: 1,
        title: "Insira alguns dados básicos",
        inputText: [
            {
                id: 1,
                label: "Nome",
                name: "nome",
                placeholder: "Insira seu nome completo"
            },
            {
                id: 2,
                label: "Email",
                name: "email",
                placeholder: "Insira seu email"
            },
            {
                id: 3,
                label: "Crie uma senha",
                name: "senha",
                placeholder: "Insira sua senha",
                secureTextEntry: true
            },
            {
                id: 4,
                label: "Confirme sua senha",
                name: "confirmaSenha",
                placeholder: "Insira sua senha",
                secureTextEntry: true
            },
            {
                id: 5,
                label: "CPF",
                name: "cpf",
                placeholder: "Insira seu CPF"
            },
            {
                id: 6,
                label: "Imagem de perfil",
                name: "imagem",
                placeholder: "URL da imagem"
            }
        ],
        checkbox: null
    },
    {
        id: 2,
        title: "Agora, mais alguns dados sobre você",
        inputText: [
            {
                id: 1,
                label: "CEP",
                name: "endereco.cep",
                placeholder: "Insira seu CEP"
            },
            {
                id: 2,
                label: "Rua",
                name: "endereco.rua",
                placeholder: "Nome da rua"
            },
            {
                id: 3,
                label: "Número",
                name: "endereco.numero",
                placeholder: "Insira seu número"
            },
            {
                id: 4,
                label: "Complemento",
                name: "endereco.complemento",
                placeholder: "Insira seu complemento"
            },
            {
                id: 5,
                label: "Estado",
                name: "endereco.estado",
                placeholder: "Seu estado"
            },
            {
                id: 6,
                label: "Telefone",
                name: "telefone",
                placeholder: "(00) 0 0000-0000"
            },
        ],
        checkbox: null
    },
    {
        id: 3,
        title: "Para finalizar, quais são seus planos de saúde?",
        inputText: null,
        checkbox: [
            {
                id: 1,
                value: "Sulamerica",
            },
            {
                id: 2,
                value: "Unimed",
            },
            {
                id: 3,
                value: "Bradesco",
            },
            {
                id: 4,
                value: "Amil",
            },
            {
                id: 5,
                value: "Biosaúde",
            },
            {
                id: 6,
                value: "Biovida",
            },
            {
                id: 7,
                value: "Outros",
            },
            {
                id: 8,
                value: "Não tenho plano",
            },
        ],
    },
];

export { sections }