/** メンバー変数を普通に定義するサンプル */
class Member1 {
  public a: string;
  protected b: string;
  private c: string;
  readonly d: string;
  constructor(a: string, b: string, c: string, d: string) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }
}

/** コンストラクタでメンバー変数を定義するサンプル */
class Member2 {
  constructor(public a: string, protected b: string, private c: string, readonly d: string) {}
}

test('create instance member1', () => {
  const member1 = new Member1('aa', 'bb', 'cc', 'dd');
  expect(member1.a).toBe('aa');
  // expect(member1.b).toBe('bb'); compile error
  // expect(member1.c).toBe('cc'); compile error
  expect(member1.d).toBe('dd');
});

test('create instance member2', () => {
  const member2 = new Member2('aa', 'bb', 'cc', 'dd');
  expect(member2.a).toBe('aa');
  // expect(member2.b).toBe('bb'); compile error
  // expect(member2.c).toBe('cc'); compile error
  expect(member2.d).toBe('dd');
});
