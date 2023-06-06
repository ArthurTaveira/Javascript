const pessoas = [
    {id: 3, nome: 'arthur'},
    {id: 2, nome: 'agata'},
    {id: 1, nome: 'vitoria'},
];

//const novasPessoas = {}
//    for (const pessoa of pessoas) {
//      const { id } = pessoa;
//      novasPessoas[id] = {...pessoa}
//    }
// o montor do js interpreta isso como ordem crescente...

const novasPessoas = new Map();
    for (const pessoa of pessoas) {
        const{id} = pessoa;
        novasPessoas.set(id, {...pessoa})
    }

    console.log(novasPessoas)
    console.log(novasPessoas.get(2))

    console.log('')
    console.log('###########')
    console.log('')

for (const [ident, {id, nome}] of novasPessoas){
    console.log(ident, id, nome)
}

//retorna um array
