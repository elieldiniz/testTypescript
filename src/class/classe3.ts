import Validador from "./validador"

class Produto{

    constructor(
        readonly id: number,
        readonly nome: string,
        readonly preco: number,
        readonly deconto: number = 0,
    ){
        Validador.maiorQueZero(id,'id nvalido')
        Validador.tamanhoEntre(nome, 2, 250, 'nome invalido')
        Validador.validarPreco(preco,'Preco invalido')
       Validador.validarDesconto(deconto,"Deconto invalido")
    }

    get precoFinal(){
        return this.preco * (1 - this.deconto)
    }


}

const p1 = new Produto(3,"caneta", 442, 0.1)

console.log(p1.nome , p1.preco, p1.deconto)
console.log(p1.precoFinal)

export {
    Produto,
}