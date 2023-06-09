const pessoas = ['art', 'arth', 'agt'];
pessoas.pop();
pessoas.push('igor');
pessoas.shift() ;
pessoas.unshift('primeiro');

// add splice
pessoas.splice(1, 0, 'addSplice') // a partir do primeiro add um

//remove splice

pessoas.splice(-1, 1) // ultimo remove 1

const NovoArray = pessoas.slice(0, 2) // a partir do indice 0 cria um novo array mas o ultimo não entra


console.log(pessoas);
console.log(NovoArray)