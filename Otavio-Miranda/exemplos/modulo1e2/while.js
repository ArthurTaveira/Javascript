const nome = "Arthur";

let i = 0;

while (i < nome.length)  {
    console.log(nome[i])
    i++
}

console.log('####')

function random (min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 15;
let rand = random(min, max);
rand = 10


//ENQUANTO essa condição acontecer faça isso
//não executou essa de baixo
while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

console.log('####')

//executa sempre no minimo uma linha de codigo
do {

    rand = random(min, max);
    console.log(rand);

} while ( rand !== 10)

