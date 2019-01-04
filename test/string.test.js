import { cutString, upcaseMoney, replaceXSS, parseQueryString, b64EncodeUnicode, b64DecodeUnicode }  from '../src/string/string.js'

test('cutString', () => {
  let s = 'this is an alien ship from the deep part of galaxy, and its shape explains to us that she is'
  expect(cutString(s, -2)).toBe('...')
  expect(cutString(s, 0)).toBe('...')
  expect(cutString(s, 7)).toBe('this is...')
  expect(cutString(s, 100)).toBe(s)
})

test('upcaseMoney', () => {
  expect(upcaseMoney(0)).toBe('零元整')
  expect(upcaseMoney(33)).toBe('叁拾叁元整')
  expect(upcaseMoney(1.68)).toBe('壹元陆角捌分')
})


test('replaceXSS', () => {
  let testHtmlStr = '<script>alert(110)</script>'
  expect(replaceXSS(testHtmlStr)).toBe('&lt;script&gt;alert(110)&lt;/script&gt;')
})

test('parseQueryString', () => {
  let qs1 = '?a=1&b=2'
  let qs2 = 'c=3&d=4'
  let qs3 = 'c=3&d=4&&'
  expect(parseQueryString(qs1)).toEqual({
    a: '1',
    b: '2'
  })
  expect(parseQueryString(qs2)).toEqual({
    c: '3',
    d: '4'
  })
  expect(parseQueryString(qs3)).toEqual({
    c: '3',
    d: '4'
  })
})

test('b64EncodeUnicode', () => {
  let str = 'HelloWorld'
  expect(b64EncodeUnicode(str)).toBe('SGVsbG9Xb3JsZA==')
})

test('b64DecodeUnicode', () => {
  let bstr = 'MDAwQF9AIEhlbGxvV29ybGQ='
  expect(b64DecodeUnicode(bstr)).toBe('000@_@ HelloWorld')
})