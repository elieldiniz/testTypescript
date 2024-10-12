class Curso{
    private _id: number | undefined
    nome: string | undefined

    get id(){
        return this._id
    }

    set id(id: number | undefined){
        this._id = id
        if((id ?? 0) > 0){
            this._id = id
        }
    }
}

const c1 = new Curso()

c1.id =  122
console.log(c1.id)
c1.nome = "TypeScript"
c1.id =  123
console.log(c1.id)

console.log(c1.nome)
