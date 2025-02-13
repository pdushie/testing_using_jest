const isLeapYear = require('./isLeapYear');
test('tests if 2025 is a leap year', ()=>{
  expect(isLeapYear(2025)).toBe(false);
});
test('tests if 2026 is a leap year', ()=>{
  expect(isLeapYear(2026)).toBe(false);
});
test('tests if 2027 is a leap year', ()=>{
  expect(isLeapYear(2027)).toBe(false);
});
test('tests if 2028 is a leap year', ()=>{
  expect(isLeapYear(2028)).toBe(true);
});