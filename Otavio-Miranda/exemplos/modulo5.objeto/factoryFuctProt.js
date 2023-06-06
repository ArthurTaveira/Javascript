
    
        const falar= {
            falar(){
            console.log(`${this.nome} ${this.sobrenome} diz Oi`)
        },}

        const comer = {
            comer(){
            console.log(`${this.nome} ${this.sobrenome} vou comer`)
        },}

        const dormir = {
            dormir(){
            console.log(`${this.nome} ${this.sobrenome} foi dormir`)
        }
    }

    //const pessoaProt = {...falar, ...comer, ...dormir}
    const pessoaProt = Object.assign({}, falar, comer, dormir)

    //compor um objeto de outros objetos, é chamado de COMPOSIÇÃO, mixing
    


function criaPessoa (nome, sobrenome) {

    return Object.create(pessoaProt, {
        nome: {value : nome},
        sobrenome: {value: sobrenome}
    })

    //possivel criar as chaves do objeto dentro do objct create
}

const pessoa1 = criaPessoa('arthur', 'guedes')
console.log(pessoa1)

const pessoa2 = criaPessoa('agata', 'vitoria')
console.log(pessoa2)