interface Entidade {
    id: number
}

interface Vendavel {
    nome: string
    preco: number
    desconto: number

}

class Produto implements Entidade, Vendavel{
    constructor(
        public id: number,
        public nome: string,
        public preco: number,
        public desconto: number = 0,
    ){}

    get precoFinal(): number {
        return this.preco * (1 - this.desconto)
    }
} 
    

const c1 = new Produto(123,"caneta",10,0)

console.log(c1.precoFinal)

export {}