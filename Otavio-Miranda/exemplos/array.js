
//                  0         1        2
const alunos = ["Luiz", "João", "Maria"]

//alunos[0] = "Gabriel"
alunos[3] = "Hugo"

alunos.push("Israel") //adiciona no final
console.log(alunos.length) //contabiliza
alunos.unshift("Vilma") //coloca na frente mas altera o indice
alunos.pop() //remove o ultimo
alunos.shift() //remove do final
console.log(alunos instanceof Array) //diz se é array


//console.log(alunos[2])  deleta até o indice 2
//console.log(alunos.slice(0, 1)) pega os itens do primeiro indice ate o outro indice colocado -1
