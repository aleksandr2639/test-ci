import heroHealth from '../app';

test('healthy', () => {
  const value = heroHealth({ name: 'Маг', health: 90 });
  expect(value).toBe('healthy');
});

test('wounded', () => {
  const value = heroHealth({ name: 'Маг', health: 45 });
  expect(value).toBe('wounded');
});

test('critical', () => {
  const value = heroHealth({ name: 'Маг', health: 10 });
  expect(value).toBe('critical');
});

test('Value "health" is not number', () => {
  expect(() => {
    heroHealth({ name: 'Маг', health: -5 });
  }).toThrow();
});

test('Value "health" is not number', () => {
  expect(() => {
    heroHealth({ name: 'Маг', health: undefined });
  }).toThrow();
});
