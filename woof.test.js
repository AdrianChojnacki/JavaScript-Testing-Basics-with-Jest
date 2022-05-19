const woof = require('./woof');

test('should return number of woofs', function() {
  const result = woof('oh herro');
  expect(result).toBe('8woof!');
  expect(result).not.toBe('sadlkhsadklsaj');
  expect({a: 'one', b: 'two'}).toEqual({a: 'one', b: 'two'});
  expect(result).toMatch(/\dwoof/i);
  expect(['a', 'b', 'c']).toContain('c');
});