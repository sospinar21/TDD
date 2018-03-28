const arr = require('../lib/index.js')

  const mergeSort = (arr) => {
    if(arr.length === 1){
      return arr;
    }
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid)
    let right = arr.slice(mid, arr.length);
    return merge(mergeSort(right), mergeSort(left))
    }
  
  const merge = (right,left) => {
    let sorted = []
    while(left.length > 0 && right.length > 0){
      left[0] <= right[0] ? sorted.push(left.shift())
                          : sorted.push(right.shift())
      }
    sorted.push(...right, ...left)
    return sorted
  }
  
const sortedArray = mergeSort(arr);
console.log(sortedArray)

module.exports = mergeSort