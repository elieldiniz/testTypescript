class Carro {
    private _velocidade: number = 0;

    constructor(readonly velocidadeMaxima: number = 200){

    }

    get velocidade(): number {
        return this._velocidade;
    }

    public acelerar(){
        this.alterarVelocidade(5);
    }

    public frear(){
        this.alterarVelocidade(-5)
    }
    protected alterarVelocidade(delta: number){
        const novaVelocidade = this._velocidade + delta
        if(novaVelocidade < 0){
            this._velocidade = 0;
            console.log("Velocidade não pode ser negativa!")
            return;
        }
        if(novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima){
            this._velocidade = novaVelocidade
        }else if(novaVelocidade > this.velocidadeMaxima){
            this._velocidade = this.velocidadeMaxima;
        }else{
            this._velocidade = 0;
        }
            
    }
}

class Fusca extends Carro{}

const C1: Fusca = new Fusca

C1.acelerar()
console.log(C1.velocidade)
C1.acelerar()
console.log(C1.velocidade)
C1.acelerar()
console.log(C1.velocidade)
C1.frear()
console.log(C1.velocidade)



export {}