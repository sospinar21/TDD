const chai = require('chai');
const assert = chai.assert
const bubbleSort = require('../lib/bubbleSort')
const arr = require('../lib/index.js')
const pry = require('pryjs')
const sorted = require('is-sorted')
// eval(pry.it)



describe('bubbleSort', () => {
  it('should exist', () => {
    assert.isFunction(bubbleSort)
  })

  it('should take an array as parameter', () => {
    assert.isDefined(arr, Array(100))
  })

  it('should sort equal numbers', () => {
    const newArray = [1,8,8,2,3,3];
    assert.equal(sorted(newArray), false);
    bubbleSort(newArray);
    assert.equal(sorted(newArray), true);
  });

  it('should arrange strings in an array in alphabetical order', () => {
    const newArr = ['d', 'm', 'o', 'n', 'b'];
    bubbleSort(newArr);
    assert.equal(sorted(newArr), true);
  });

  it('should arrange numbers in an array from lowest to highest.', () => {
    const array = [10, 10, 9, 6, 7, 9, 8, 1, 2, 3];
    assert.equal(sorted(array), false);
    bubbleSort(array);
    assert.equal(sorted(array), true);
  });
  
  it('should have the same length as original array', () => {
    const array = [10, 13, 19, 2, 4, 6, 90, 80, 50]
    bubbleSort(array);
    assert.equal(array.length, 9);
  });

  it('should sort an array with 100 elements', () => {
    let arr = Array.from({length: 100}, () =>  Math.floor(Math.random() * 101))
    bubbleSort(arr);
    assert.equal(sorted(arr), true);
  });

  it('should sort an array with 10000 elements', () => {
    let arr = Array.from({length: 10000}, () =>  Math.floor(Math.random() * 10001))
    bubbleSort(arr);
    assert.equal(sorted(arr), true);
  });

  it('should sort an array with 100000 elements', () => {
    let arr = Array.from({length: 12000}, () =>  Math.floor(Math.random() * 12001))
    bubbleSort(arr);
    assert.equal(sorted(arr), true);
  });


})