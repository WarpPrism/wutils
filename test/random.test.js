import { randomInt, randomString } from '../src/random/random.js'

test('randomInt' , () => {
  let r = randomInt(5, 15)
  expect(r).toBeLessThan(15)
  expect(r).toBeGreaterThanOrEqual(5)
})

test('randomString' , () => {
  let r = randomString(7)
  expect(r.length).toBe(7)
})
