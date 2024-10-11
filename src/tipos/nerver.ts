function falha(msg: string): never {
    throw new Error(msg)
 
}

falha('descrição muito pequena')