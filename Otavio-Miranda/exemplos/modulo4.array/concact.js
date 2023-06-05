const num = [1, 2 ,3 ,4 , 5];
const num2 = [6, 7, 8, 9, 10];
const num3 = num.concat(num2, [11, 12, 13], 'agata')

console.log("1)", num3)

console.log("##############")

const num4 = [...num,...num2, "opa", ...["a", "b", "c"]]

console.log("2)", num4)


