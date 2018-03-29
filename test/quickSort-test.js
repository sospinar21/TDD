const chai = require('chai');
const assert = chai.assert
const quickSort = require('../lib/quickSort')
const arr = require('../lib/index.js')
const pry = require('pryjs')
const sorted = require('is-sorted')
// eval(pry.it)



describe('quickSort', () => {
  it('should exist', () => {
    assert.isFunction(quickSort)
  })

  it('should take an array as parameter', () => {
    assert.isDefined(arr, Array(100))
  })

  it('should sort equal numbers', () => {
    const newArray = [1,8,8,2,3,3];
    assert.equal(sorted(newArray), false);
    quickSort(newArray,newArray);
    let sArray = [...quickSort(newArray), newArray, ...quickSort(newArray)]
    assert.equal(sorted(sArray), true);
  });

  it('should arrange strings in an array in alphabetical order', () => {
    const newArr = ['d', 'm', 'o', 'n', 'b'];
    quickSort(newArr);
    assert.equal(sorted(newArr), true);
  });

  it('should arrange numbers in an array from lowest to highest.', () => {
    const array = [10, 10, 9, 6, 7, 9, 8, 1, 2, 3];
    quickSort(array,array);
    let sArray = [...quickSort(array), array, ...quickSort(array)]
    assert.equal(sorted(sArray), true);
  });
  
  it('should have the same length as original array', () => {
    const array = [10, 13, 19, 2, 4, 6, 90, 80, 50]
    quickSort(array);
    assert.equal(array.length, 9);
  });

  it('should sort an array with 100 elements', () => {
    let arr = Array.from({length: 100}, () =>  Math.floor(Math.random() * 101))
    quickSort(arr,arr);
    let newArr = [...quickSort(arr), arr, ...quickSort(arr)]
    assert.equal(sorted(newArr), true);
  });

  it('should sort an array with 10000 elements', () => {
    let arr = Array.from({length: 10000}, () =>  Math.floor(Math.random() * 10001))
    quickSort(arr);
    let sArray = [...quickSort(arr), arr, ...quickSort(arr)]
    assert.equal(sorted(sArray), true);
  });

  it('should sort an array with 100000 elements', () => {
    let arr = Array.from({length: 100000}, () =>  Math.floor(Math.random() * 100001))
    quickSort(arr, arr);
    let sArray = [...quickSort(arr), arr, ...quickSort(arr)]
    assert.equal(sorted(sArray), true);
  });

  it('should sort an array with 150000 elements', () => {
    let arr = Array.from({length: 150000}, () =>  Math.floor(Math.random() * 150001))
    quickSort(arr, arr);
    let sArray = [...quickSort(arr), arr, ...quickSort(arr)]
    assert.equal(sorted(sArray), true);
  });

  it('should sort an array with 250000 elements', () => {
    let arr = Array.from({length: 250000}, () =>  Math.floor(Math.random() * 250001))
    quickSort(arr, arr);
    let sArray = [...quickSort(arr), arr, ...quickSort(arr)]
    assert.equal(sorted(sArray), true);
  });

  it('should sort an array with 350000 elements', () => {
    let arr = Array.from({length: 350000}, () =>  Math.floor(Math.random() * 350001))
    quickSort(arr, arr);
    let sArray = [...quickSort(arr), arr, ...quickSort(arr)]
    assert.equal(sorted(sArray), true);
  });


})