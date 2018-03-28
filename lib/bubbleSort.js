
const arr = require('../lib/index.js')


const bubbleSort = (arr) => {
  for(let i = 1; i < arr.length; i++ ){
      while(arr[i] < arr[i-1]) {
       [arr[i], arr[i -1]] =  [arr[i - 1], arr[i]]
        i--
      }
    }
  return arr
}

let sortedArray = bubbleSort(arr)
console.log(sortedArray)

module.exports = bubbleSort;