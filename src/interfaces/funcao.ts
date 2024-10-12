interface OperacaoMatematica {
    fn: (n: number, n1: number) => number;
}

const soma: OperacaoMatematica = {
    fn(n: number, n1: number){
        return n + n1;
    }
}

console.log(soma.fn(20,20))

