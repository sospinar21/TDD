const chai = require('chai');
const assert = chai.assert
const mergeSort = require('../lib/mergeSort.js')
const merge = require('../lib/mergeSort.js')
const arr = require('../lib/index.js')
const pry = require('pryjs')
const sorted = require('is-sorted')
// eval(pry.it)



describe('mergeSort', () => {
  it('should exist', () => {
    assert.isFunction(mergeSort)
  })

  it('should take an array as parameter', () => {
    assert.isDefined(arr, Array(100))
  })

  it('should sort equal numbers', () => {
    const newArray = [1,8,8,2,3,3];
    assert.equal(sorted(newArray), false);
    merge(newArray,newArray);
    assert.equal(sorted(newArray), true);
  });

  it('should arrange strings in an array in alphabetical order', () => {
    const newArr = ['d', 'm', 'o', 'n', 'b'];
    merge(newArr,newArr);
    assert.equal(sorted(newArr), true);
  });

  it('should arrange numbers in an array from lowest to highest.', () => {
    const array = [10, 10, 9, 6, 7, 9, 8, 1, 2, 3];
    assert.equal(sorted(array), false);
    merge(array,array);
    assert.equal(sorted(array), true);
  });
  
  it('should sort an array with 100 elements', () => {
    let arr = Array.from({length: 100}, () =>  Math.floor(Math.random() * 101))
    merge(arr,arr);
    assert.equal(sorted(arr), true);
  });

  it('should sort an array with 10000 elements', () => {
    let arr = Array.from({length: 10000}, () =>  Math.floor(Math.random() * 10001))
    merge(arr, arr);
    assert.equal(sorted(arr), true);
  });

  it('should sort an array with 100000 elements', () => {
    let arr = Array.from({length: 50000}, () =>  Math.floor(Math.random() * 50001))
    merge(arr, arr);
    assert.equal(sorted(arr), true);
  });
})