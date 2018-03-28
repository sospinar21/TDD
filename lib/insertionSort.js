const arr = require('../lib/index.js')

const insertionSort = (arr) => {
  for(let i=0; i < arr.length ; i++){
      while(arr[i] < arr[i-1]){
        let remove = arr.splice(i,1)
        let add = arr.splice(i -1,0, remove[0])
        i--
    }
  }
  return arr;
}


const sortedArr = insertionSort(arr);
console.log(sortedArr)

module.exports = insertionSort;