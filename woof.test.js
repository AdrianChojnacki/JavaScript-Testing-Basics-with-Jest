const woof = require('./woof');

test.only('should return number of woofs', function() {
  const result = woof('oh herro');
  expect(result).toBe('8woof!');
  expect(result).not.toBe('sadlkhsadklsaj');
  expect({a: 'one', b: 'two'}).toEqual({a: 'one', b: 'two'});
  expect(result).toMatch(/\dwoof/i);
  expect(['a', 'b', 'c']).toContain('c');
});

test.skip('should return undefined when not given a string', () => {
  // const result = woof();
  // expect(result).toBeNull;
  expect(() => woof()).toThrow("MUST");
  woof();
});

test('failed test', () => {
  woof();
});

test.todo("should not allow numbers to be passed");