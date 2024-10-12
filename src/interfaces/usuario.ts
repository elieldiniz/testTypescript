interface Usuario{
    id : number
    nome: string
    email: string
}

const usuarioLogado: Usuario = {
    id: 1,
    nome: "Alice",
    email: "alice@example.com"
}

console.log(usuarioLogado.email, usuarioLogado.nome, usuarioLogado.id)

export {}