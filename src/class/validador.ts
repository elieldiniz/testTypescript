export default class Validador{
    static maiorQueZero(n: number, erro: string){
        if(n <= 0){
            throw new Error(erro)
        }
    }

    static tamanhoEntre(n: string, min: number, max: number ,msgError: string){
        Validador.entre(n.length, min, max, msgError)
    }

    static entre(n: number, min: number, max: number ,msgError: string){
        if(n < min || n > max) throw new Error(msgError)
    }

    static validarPreco(preco: number,msgError: string){
        if(preco < 0) throw new Error(msgError)
    }

    static validarDesconto(desconto: number,msgError: string){
        if(desconto < 0 || desconto > 0.8){
            throw new Error(msgError)
        }
    }
}

