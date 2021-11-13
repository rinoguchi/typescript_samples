enum Length1 {
  L,
  S,
}

enum Length2 {
  L = 'Long', // value も指定
  S = 'Short',
}

test('normal', async () => {
  expect(Length1.L).toBe(Length1.L);
  expect(Length1.S).toBe(Length1.S);
  expect(Length1.L.valueOf()).toBe(Length1.L);
  expect(Length1.S.valueOf()).toBe(Length1.S);
  expect(Length2.L).toBe(Length2.L);
  expect(Length2.S).toBe(Length2.S);
  expect(Length2.L.valueOf()).toBe('Long');
  expect(Length2.S.toString()).toBe('Short');
});
