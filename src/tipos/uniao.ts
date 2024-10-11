let nota: number | string

nota = 'A+'

type notaOuConceito = number | 'A' | 'B' | 'C' | 'D' | 'E' 

let n1: notaOuConceito = 7


console.log(n1)

n1 = 'C'

console.log(n1)

function imprimir(nota : notaOuConceito ) {
    if(typeof nota === 'number'){
        console.log(`Nota: ${nota}`)
    } else if(typeof nota === 'string'){
        console.log(`Conceito: ${nota}`)
    }
}

n1 = 10

imprimir(n1)