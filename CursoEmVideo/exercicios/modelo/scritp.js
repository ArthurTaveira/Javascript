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
        valores.push(Number(num.value));
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ""
    } else {
        window.alert('Valor inválido ou já adicionado')
    }
    num.value = ''
    num.focus()
}

function finalizar () {
    if (valores.lgnth === 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {

        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for (let pos in valores) {
            soma += valores[pos];
            if (valores[pos] > maior) maior = valores[pos];
            if (valores[pos] < menor ) menor = valores[pos];
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> ao todo temos ${tot} elementos</p>`
        res.innerHTML += `<p>o maior número é ${maior}</p>`
        res.innerHTML += `<p>o menor número é ${menor}</p>`
        res.innerHTML += `<p>a soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>a media dos números é ${media}</p>`
    }
}