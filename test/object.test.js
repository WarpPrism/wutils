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


test('extend object', () => {
  // we are venome~
  let Eddie  = {
    name: 'Eddie Brock',
    age: '36',
    feature: {
      talent: 'elevator',
      kind: true,
      justical: true
    }
  }
  let Venome = {
    name: 'venome',
    age: '10^32',
    feature: {
      talent: 'jump',
      appetite: 'huge'
    }
  }
  var duye1 = extend({}, Eddie, Venome)
  var duye2 = extend(true, {}, Eddie, Venome)

  expect(duye1).toEqual({
    name: 'venome',
    age: '10^32',
    feature: {
      talent: 'jump',
      appetite: 'huge'
    }
  })
  expect(duye2).toEqual({
    name: 'venome',
    age: '10^32',
    feature: {
      talent: 'jump',
      appetite: 'huge',
      kind: true,
      justical: true
    }
  })
})