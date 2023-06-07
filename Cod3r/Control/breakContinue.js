//desvio de fluxo

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

for ( x in nums) {
    if (x == 6) {
        break
    }

    console.log(`${x}: ${nums[x]}`)
}
console.log('')
console.log('#############')
console.log('')

for ( x in nums) {
    if (x == 6) {
        continue
    }

    console.log(`${x}: ${nums[x]}`)
}