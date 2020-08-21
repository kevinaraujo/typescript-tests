let vars = [1, 2, 3, undefined, 5, 10, 11]
    
let response = vars.filter(x => !x)
console.log(response)

let response2 = vars.filter(loop = (value) => !value)
console.log(response2)

let sentence = "It was a stomy night and I need sleeping.";

let words = sentence.split(' ').filter(x => x.length > 3);
console.log(words);