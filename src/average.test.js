//Test Creator: Philip Dushie
const average = require('./average');

test('average 1,2,3 to equal 2', ()=>{
  expect(average([1,2,3])).toBe(2);
});
test('average 100,200,300 to equal 200', ()=>{
  expect(average([100,200,300])).toBe(200);
});
test('average 9,30,15 to equal 18', ()=>{
  expect(average([9,30,15])).toBe(180);
});
test('average 20,2,16,15,7 to equal 2', ()=>{
  expect(average([20,2,16,15,7])).toBe(12);
});