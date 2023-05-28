let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

function isNumber(n) {
    if(Number(n) >= 1 && n<= 100) {
        return true
    } else {
        return false
    }
 }

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true;

    } else {
        return false;
    }

}

function adicionar() {
    if (isNumber(num.value) && !inLista(num.value, valores)){
        window.alert('tudo ok')
    } else {
        window.alert('Valor inválido ou já adicionado')
    }
}