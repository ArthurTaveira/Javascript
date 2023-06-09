const alunos = [
    {nome: 'arthr', nota: 7.5, bolsista: false },
    {nome: 'agat', nota: 9, bolsista: true},
    {nome: 'milen', nota: 2.6, bolsista:true },
    {nome: 'gabri', nota: 1, bolsista: false },
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0);

console.log(resultado)


console.log('')
console.log('############')
console.log('')

const alunos2 = [
    {nome: 'artthr', nota: 7.5, bolsista: false },
    {nome: 'agata', nota: 9, bolsista: true},
    {nome: 'mileny', nota: 2.6, bolsista:true },
    {nome: 'gabri', nota: 1, bolsista: false },
    {nome: 'liz', nota: 7, bolsista: false },
]

const getNota = (aluno) => aluno.nota;
const somaTotal = (total, atual) => total + atual

console.log(alunos.map(getNota).reduce(somaTotal))

