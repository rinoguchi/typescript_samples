/** サイズ規定クラス */
class Size {
  // 定数インスタンスを static 変数の Array として保持
  private static readonly values = new Array<Size>();

  // 定数インスタンスを作成。変更されると困るので readonly 必須
  static readonly S = new Size('S', 'Small');
  static readonly M = new Size('M', 'Medium');
  static readonly L = new Size('L', 'Large');

  /** コンストラクタ。は外部から実行されると困るので private 装飾 */
  private constructor(readonly name: string, readonly fullname: string) {
    Size.values.push(this);
  }

  /** 名前を使用したファクトリメソッド */
  static of(name: string): Size {
    const size: Size | undefined = Size.values.find((v) => v.name === name);
    if (size === undefined) throw new Error(`${name} is not supported.`);
    return size;
  }

  /** フルネームを使用したファクトリメソッド */
  static fromFullname(fullname: string): Size {
    const size: Size | undefined = Size.values.find((v) => v.fullname === fullname);
    if (size === undefined) throw new Error(`${fullname} is not supported.`);
    return size;
  }

  // インスタンスメソッドの例
  toString(): string {
    return `${this.name}: ${this.fullname}`;
  }
}

// 正常系
test('normal', async () => {
  console.log(Size.S); // Size { name: 'S', fullname: 'Small' }
  expect(Size.of('M')).toBe(Size.M);
  expect(Size.fromFullname('Large')).toBe(Size.L);
  expect(Size.S.toString()).toBe('S: Small');
});

// 異常系
test('abnormal', async () => {
  expect(() => Size.of('XX')).toThrowError();
  expect(() => Size.fromFullname('XX')).toThrowError();
  // new Size('XL', 'Xstra Large'); compile error
});
