import { formatDate } from '../src/date/date.js'

let testTimeStamp = 1542858856456

test('formatDate', () => {
  expect(formatDate(testTimeStamp, 'yyyy-MM-dd hh:mm:ss')).toBe('2018-11-22 11:54:16')
  expect(formatDate(testTimeStamp, 'yyyy.MM.dd hh:mm:ss')).toBe('2018.11.22 11:54:16')

  expect(formatDate(testTimeStamp, 'yy.MM.dd hh:mm:ss')).toBe('18.11.22 11:54:16')
  expect(formatDate(testTimeStamp)).toBe('2018.11.22 11:54:16')
})