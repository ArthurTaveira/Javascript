function gerar() {
    let num = document.querySelector('#txtn');
    let tab = document.querySelector('#seltab');

    if (num.value.length == 0) {
        window.alert('erro')
    } else {
        
        let n = Number(num.value);
        let c =1;
        tab.innerHTML = '';

        while (c <= 10) {
            let item = document.createElement('option');
            let resultado = c * n
            item.text = `${n} * ${c} = ${resultado}`;
            tab.appendChild(item);
            item.value = `tab${c}`
            c++
        }
    }
   
}


