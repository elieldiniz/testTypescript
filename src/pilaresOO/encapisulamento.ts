class Carro {
    private velocidadeAtual: number = 0
    protected readonly VELOCIDADE_MAXIMA: number = 200

    constructor( public nome: string){

    }

    get velocidade(){
        return this.velocidadeAtual
    }

    protected alterarVElociade(delta: number){
        const novaVelocidade = this.velocidadeAtual + delta
        if(novaVelocidade >= 0 && novaVelocidade <= this.VELOCIDADE_MAXIMA)
            this.velocidadeAtual = novaVelocidade
    }

    acelerar(){
            this.alterarVElociade(5)


    }

}

const c2 = new Carro('carro1')

c2.acelerar()
console.log(c2.velocidade)

c2.acelerar()
console.log(c2.velocidade)

c2.acelerar()
console.log(c2.velocidade)

c2.acelerar()
console.log(c2.velocidade)

c2.acelerar()

console.log(c2.velocidade)

export {}