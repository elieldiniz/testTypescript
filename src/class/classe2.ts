class Curso{
    readonly _id: number 
    nome: string | undefined

    constructor(id: number){
        this._id = id
        if((id?? 0) > 0){
            this._id = id
        }

    }

    get id(){
        return this._id
    }
}

const c1 = new Curso(1223)


console.log(c1.id)
c1.nome = "TypeScript"
console.log(c1.id)

console.log(c1.nome)

export {}