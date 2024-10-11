let Produto: {
    nome: string;
    preco: number;
    desconto: number;
    precoDesconto(): number;
}
  
Produto = Produto = {
    nome: "Notebook",
    preco: 2500.00,
    desconto: 0.1,
    precoDesconto(){
        return this.preco * (1 - this.desconto)
    }
}

console.log(Produto.precoDesconto())
console.log(Produto.desconto)
console.log(Produto.nome)