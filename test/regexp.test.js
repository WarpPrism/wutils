import { isEmail, isIdCard, isPhoneNum, isUrl } from '../src/regexp/regexp.js'

test('isEmail', () => {
  expect( isEmail('zhoujihao@wps.cn') ).toBeTruthy()
  expect( isEmail('zhoujihao@gmail.fe.com') ).toBeTruthy()
  expect( isEmail('zhoujihao.io@qq.com') ).toBeTruthy()

  expect( isEmail('zhoujihao@') ).toBeFalsy()
  expect( isEmail('zhoujihao') ).toBeFalsy()
  expect( isEmail('zhoujihao@.') ).toBeFalsy()
  expect( isEmail('zhoujihao@okok') ).toBeFalsy()
})

test('isIdCard', () => {
  expect( isIdCard('110101199003078494') ).toBeTruthy()
  expect( isIdCard('31010120040307626X') ).toBeTruthy()

  expect( isIdCard('') ).toBeFalsy()
  expect( isIdCard('abc') ).toBeFalsy()
  expect( isIdCard('44010619900307469') ).toBeFalsy()
  expect( isIdCard('44010619900307469A') ).toBeFalsy()
})

test('isPhoneNum', () => {
  expect( isPhoneNum('13697712890') ).toBeTruthy()
  expect( isPhoneNum('18826226688') ).toBeTruthy()

  expect( isPhoneNum('') ).toBeFalsy()
  expect( isPhoneNum('abc') ).toBeFalsy()
  expect( isPhoneNum('010102033') ).toBeFalsy()
  expect( isPhoneNum('xxxxxxxxxxxxx') ).toBeFalsy()
})

test('isUrl', () => {
  expect( isUrl('www.baidu.com') ).toBeTruthy()
  expect( isUrl('http://www.qq.com') ).toBeTruthy()
  expect( isUrl('https://www.qq.com.cn') ).toBeTruthy()

  expect( isUrl('') ).toBeFalsy()
  expect( isUrl('abc') ).toBeFalsy()
  expect( isUrl('010102033') ).toBeFalsy()
  expect( isUrl('xxxxxxxxxxxxx') ).toBeFalsy()
})
