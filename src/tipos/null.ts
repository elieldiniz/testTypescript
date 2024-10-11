type Usuario = {nome: string, email: string}

const usuario: Usuario[] = [
    {nome: "Alice", email: "alice@example.com"},
    {nome: "Bob", email: "bob@example.com"},
    {nome: "Carol", email: "carol@example.com"},
    {nome: "Dave", email: "dave@example.com"},
    
]

type UsuarioNotFoundError = {
  message: string;
}

function buscarPorEmail(email: string): Usuario | UsuarioNotFoundError {
   const UsuarioEncontrado = usuario.find(user => user.email === email) ?? null
   if(!UsuarioEncontrado){
    return { message: `Usuário com o email "${email}" não encontrado.` }
   }
   
   return UsuarioEncontrado
}

const buscarUsuario = buscarPorEmail('carol@example.com')


const buscarUsuario1 = buscarPorEmail('carol@example.co')

console.log(buscarUsuario1)

console.log(buscarUsuario)
