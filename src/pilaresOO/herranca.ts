interface Entidade {
    id: string
}

interface Usuario extends Entidade {
    nome: string
    email: string
    senha: string
}



const usuarios: Usuario = {
    id: "12345",
    nome: "Alice",
    email: "alice@example.com",
    senha: "123456"
}



export {}