const arr = [1, 5]
const newArr = [4, ...arr]

console.log(newArr)

function sum(a, b, c) {
    return a + b + c
}

console.log(sum(2, ...arr))