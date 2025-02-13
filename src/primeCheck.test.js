//Test Creator: Philip Dushie
const primeCheck = require('./primeCheck');

test('tests if 356 is prime', ()=>{
  expect(primeCheck(356)).toBe(false);
});
test('tests if 500299 is prime', ()=>{
  expect(primeCheck(500299)).toBe(true);
});
test('tests if 500315 is prime', ()=>{
  expect(primeCheck(500315)).toBe(false);
});