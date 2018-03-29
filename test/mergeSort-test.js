const chai = require('chai');
assert = chai.assert
const mergeSort = require('../lib/mergeSort')
const arr = require('../lib/index.js')
const pry = require('pryjs')
var sorted = require('is-sorted')
// eval(pry.it)



describe('mergeSort', () => {
  it('should exist', () => {
    assert.isFunction(mergeSort)
  })

  it('should take an array as parameter', () => {
    assert.isDefined(arr, Array(100))
  })

   it('expects to return an already sorted array', () => {
    let array = [6];
    mergeSort(array);
    assert.equal(array, 6)
  })

  it('should arrange strings in an array in alphabetical order', () => {
    const newArray = ['denver', 'miami', 'orlando', 'nyc', 'boulder'];
    assert.equal(sorted(newArray), false);
    mergeSort(newArray);
    assert.equal(sorted(newArray), true);
  });

  it('should arrange numbers in an array from lowest to highest.', () => {
    const array = [10, 10, 9, 6, 7, 9, 8, 1, 2, 3];
    assert.equal(sorted(array), false);
    mergeSort(array);
    assert.equal(sorted(array), true);
  });
  
  it('should have the same length as original array', function () {
    const array = [10, 13, 19, 2, 4, 6, 90, 80, 50]
    const arrayLength = array.length;
    const mergeSorted = mergeSort(array);
    const array2Length = mergeSorted.length;
    assert.equal(array2Length, arrayLength);
  });



})