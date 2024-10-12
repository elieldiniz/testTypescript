abstract class Animail{
    abstract emitirSom(): void
}

class Cachorro extends Animail{
    emitirSom(): string {
        return "auuu"
    }
}

class Gato extends Animail{
    emitirSom(): string {
        return 'Miau!'
    }
}


function exibir(animal: Animail){
    console.log(animal.emitirSom())
}    

let a: Animail = new Gato();

exibir(a)

a = new Cachorro()

exibir(a)


export {}