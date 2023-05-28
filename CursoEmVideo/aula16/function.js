function parImp(n ) {

    if (n % 2 === 0 )return "Par"
     else return "impar"

}
let res = parImp(11)

console.log(res)

var v= function(x) {
    return x *2
}
console.log(v(5))

//fatorial

function fatorial(z) {
    let fat = 1
    for (let c = z; c > 1; c--) {
        fat *= c

    }
    return fat
}

console.log(fatorial(8))



function fatorialNum(w){
    if (w === 1) {
        return 1
    } else {
        return w * fatorialNum(w -1)
    }
}

console.log( fatorialNum(5))

