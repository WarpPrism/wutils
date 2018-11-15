'use strict'

import { isPlainObject, isEmptyObj, extend, stringfyQueryString } from '../src/object/object.js';

let o = new Object()
let fn = new Function()
let arr = new Array()

test('isPlainObject', () => {
  expect( isPlainObject({}) ).toBeTruthy()
  expect( isPlainObject({name: 'xiaoming'}) ).toBeTruthy()

  expect( isPlainObject('hello') ).toBeFalsy()
  expect( isPlainObject(100) ).toBeFalsy()
  expect( isPlainObject(fn) ).toBeFalsy()
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
//   let Eddie  = {
//     name: 'Eddie Brock',
//     age: '36',
//     feature: {
//       talent: 'elevator'
//     }
//   }
//   let Venome = {
//     name: 'venome',
//     age: 'unknown',
//     feature: {
//       talent: 'jump',
//       appetite: 'huge'
//     }
//   }
//   Eddie = JSON.parse(JSON.stringify(Eddie))
//   Venome = JSON.parse(JSON.stringify(Venome))

//   let duye1 = extend({}, Eddie, Venome)
//   let duye2 = extend(true, {}, Eddie, Venome)
//   console.log(duye1);
//   expect(1).toBe(1)
// })