class PartialConstructorSample {
  readonly aa?: string;
  readonly bb?: string;
  readonly cc: string | undefined;

  constructor(init?: Partial<PartialConstructorSample>) {
    Object.assign(this, init);
  }
}

test('create instance', () => {
  expect(new PartialConstructorSample({ aa: 'aaa' })).toBeInstanceOf(PartialConstructorSample);
  expect(new PartialConstructorSample({ aa: 'aaa', bb: 'bbb' })).toBeInstanceOf(PartialConstructorSample);
  expect(new PartialConstructorSample({ aa: 'aaa', cc: 'ccc' })).toBeInstanceOf(PartialConstructorSample);
  // expect(new PartialConstructorSample({ aa: 'aaa', dd: 'zzz' })).toBeInstanceOf(PartialConstructorSample); compile error
});
