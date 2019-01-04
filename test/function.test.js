import { once } from '../src/function/function.js'

test('function once', () => {
  let onceFn = once(function() {
    return 1 + 1;
  })

})