import { formatDate, getDateObj } from '../src/date/date.js'

let testTimeStamp = 1542858856456

test('formatDate', () => {
  expect(formatDate(testTimeStamp, 'yyyy-MM-dd hh:mm:ss')).toBe('2018-11-22 11:54:16')
  expect(formatDate(testTimeStamp, 'yyyy.MM.dd hh:mm:ss')).toBe('2018.11.22 11:54:16')

  expect(formatDate(testTimeStamp, 'yy.MM.dd hh:mm:ss')).toBe('18.11.22 11:54:16')
  expect(formatDate(testTimeStamp)).toBe('2018.11.22 11:54:16')
})

test('getDateObj', () => {
  let parsedDate = getDateObj(testTimeStamp)
  expect(parsedDate.year).toEqual(2018)
  expect(parsedDate.month).toEqual(11)
  expect(parsedDate.day).toEqual(22)
  expect(parsedDate.second).toEqual(16)
})