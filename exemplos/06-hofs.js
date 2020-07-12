
const nums = [1,2,3,4]

const testForEach = (value, index, arr) => {
    console.log(value, index, arr)
    
}
const retForEach = nums.forEach(testForEach)
console.log('Retorno forEach', retForEach)

const testMap = (value, index, arr) => {
    console.log(value, index, arr)
    return value * 3
}
const retMap = nums.map(testMap)

console.log('Retorno map', retMap);




// const nums = [1,2,3,4]

// const test = (value, index, arr) => {
//     console.log(value, index, arr)
    
// }

// // const = test
// nums.forEach(test)
