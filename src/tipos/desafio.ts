type Contacorente = {numeroConta: number, saldo: number , movimento(valor: number ): void}

type ContaNãoEncontrada = {
    message: string;
  }

type Cliente = {nome: string, email: string, contas: Contacorente[]}


 const contaNãoEncontrada: ContaNãoEncontrada  = {
        message: "Conta não encontrada."
 }

function movimento(this: Contacorente ,valor: number){
    this.saldo += valor
}

const Cliente: Cliente[] = [
    {nome: "Alice", email: "alice@example.com", contas: [
        {numeroConta: 12345, saldo: 1000.00, movimento},
      
    ]},
    {nome: "João", email: "joao@example.com", contas: [
        {
            numeroConta: 54321,
            saldo: 1500.00,
            movimento},
 
    ]},
    {nome: "Maria", email: "maria@example.com", contas: [
        {numeroConta: 13579, saldo: 2500.00, movimento},

    ]},
    {nome: "Pedro", email: "pedro@example.com", contas: [
        {numeroConta: 11223, saldo: 1800.00, movimento},

    ]},
    {nome: "Ana", email: "ana@example.com", contas: [
        {numeroConta: 99887, saldo: 2800.00, movimento},
    ]}
]

function movimentarConata(numeroConta: number, valor: number){
    const cliente = Cliente.map(cli => {
        return cli.contas.find(cc => cc.numeroConta === numeroConta)
    }).filter(c => c)[0]
    cliente?.movimento(valor)
    
    
}

function ConsultarSaldo(numeroConta: number){
    const cliente = Cliente.map(cli => {
        return cli.contas.find(cc => cc.numeroConta === numeroConta)
    }).filter(c => c)[0]
    return cliente?.saldo ?? null
}

movimentarConata(99887,-1000)

console.log(ConsultarSaldo(99887))