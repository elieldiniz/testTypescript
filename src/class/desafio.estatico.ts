class DesafioEstatico {
    valor: number = 20
    

    static executar(){
        const desafio = new DesafioEstatico()
        console.log(desafio.valor)
    }
}

DesafioEstatico.executar()