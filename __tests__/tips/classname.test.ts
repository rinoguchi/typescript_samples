class Parent {
  constructor(public name: string) {}

  static classNameInStaticMethod(): string {
    return this.name;
  }

  classNameInInstanceMethod(): string {
    return this.constructor.name;
  }
}

class Child extends Parent {}

test('parent', () => {
  expect(Parent.classNameInStaticMethod()).toBe('Parent');
  expect(new Parent('prament').classNameInInstanceMethod()).toBe('Parent');
  expect(new Parent('prament').constructor.name).toBe('Parent');
  expect(Parent.name).toBe('Parent');
});

test('child', () => {
  expect(Child.classNameInStaticMethod()).toBe('Child');
  expect(new Child('child').classNameInInstanceMethod()).toBe('Child');
  expect(new Child('prament').constructor.name).toBe('Child');
  expect(Child.name).toBe('Child');
});
