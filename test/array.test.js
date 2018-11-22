import { isArr, quickSortArr, uniqueArr, shuffleArr } from '../src/array/array.js';

test('isArr', () => {
  expect(isArr([0, 1])).toBeTruthy()
  expect(isArr('hello')).toBeFalsy()
  expect(isArr(100)).toBeFalsy()
})

test('quicksort arr ascend', () => {
  let testArr = [7, 20, 0, 88, 32, 72, 119]
  expect( quickSortArr(testArr) ).toEqual([0, 7, 20, 32, 72, 88, 119])
})

test('quicksort arr by key', () => {
  let testArr = [{cost: 300}, {cost: 1600}, {cost: 99}]
  expect( quickSortArr(testArr, 'cost') ).toEqual([{cost: 99}, {cost: 300}, {cost: 1600}])
})

test('unique arr', () => {
  let testArr = [1, 1, 'a', 'a', '0', null, undefined, undefined, '', '', '2', '3']
  expect(uniqueArr(testArr)).toEqual([ 1, 'a', '0', null, undefined, '', '2', '3' ])
})

test('shuffle arr', () => {
  let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  expect(shuffleArr(testArr)).not.toEqual(testArr)
})
