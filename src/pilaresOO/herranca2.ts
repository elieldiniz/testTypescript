interface CasoDeUso{
    executar(entrada: any): any 
}

interface Usuario {
    nome: string;
    email: string;
    senha: string;
  

}

class RegistrarUsuario implements CasoDeUso{
    executar(entrada:Usuario ) {
        console.log(`Novo usuário cadastrado: ${entrada.nome} - ${entrada.email}`)
        // Implementar a persistência do usuário no banco de dados aqui
        // Exemplo: await UsuarioRepository.create(entrada)
        // Exemplo: console.log('Usuário criado com sucesso!')
    }
}

const Usuario1: Usuario = {
    nome: "Alice",
    email: "alice@example.com",
    senha: "123456"
}

const casoDeUso: CasoDeUso = new RegistrarUsuario()

casoDeUso.executar(Usuario1)


export {}