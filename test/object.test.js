import { isPlainObj, isEmptyObj, extend, stringfyQueryString } from '../src/object/object.js';

let o = new Object()
let fn = new Function()
let arr = new Array()

test('isPlainObj', () => {
  expect( isPlainObj({}) ).toBeTruthy()
  expect( isPlainObj({name: 'xiaoming'}) ).toBeTruthy()

  expect( isPlainObj('hello') ).toBeFalsy()
  expect( isPlainObj(100) ).toBeFalsy()
  expect( isPlainObj(fn) ).toBeFalsy()
})


test('isEmptyObj', () => {
  expect( isEmptyObj({}) ).toBeTruthy()
  expect( isEmptyObj(o) ).toBeTruthy()

  expect( isEmptyObj({name: 'xiaoming'}) ).toBeFalsy()
  expect( isEmptyObj('') ).toBeFalsy()
  expect( isEmptyObj(arr) ).toBeFalsy()
})


// test('extend', () => {
//   // we are venome~
//   var Eddie  = {
//     name: 'Eddie Brock',
//     age: '36',
//     feature: {
//       talent: 'elevator'
//     }
//   }
//   var Venome = {
//     name: 'venome',
//     age: 'unknown',
//     feature: {
//       talent: 'jump',
//       appetite: 'huge'
//     }
//   }
//   Eddie = JSON.parse(JSON.stringify(Eddie))
//   Venome = JSON.parse(JSON.stringify(Venome))

//   var duye1 = extend(Eddie, Venome)
//   var duye2 = extend(true, {}, Eddie, Venome)
//   console.log(duye1);
//   expect(1).toBe(1)
// })