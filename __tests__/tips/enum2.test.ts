/**
 * 名前とフルネームを持つ Enum クラスの規定クラス
 * 直接インスタンス生成されないように abstract クラスとして定義
 */
abstract class NameAndFullname {
  // 定数インスタンスを保持。ただし、全てのサブクラスの定数インスタンスが入ってくるので要注意。今回の例では、Sex.M, Sex.F, Color.B, Color.Wが入ってくる
  private static values = new Array<NameAndFullname>();

  // 継承先から利用できるように protected 修飾
  protected constructor(readonly name: string, readonly fullname: string) {
    NameAndFullname.values.push(this);
  }

  /** 名前を使用したファクトリメソッド */
  static of(name: string): NameAndFullname {
    // 別のサブクラスで同名の定数があるとまずいので、クラス名もチェック
    const nameAndFullname = NameAndFullname.values.find((v) => v.constructor.name === this.name && v.name === name);
    if (nameAndFullname === undefined) throw new Error(`${this.name}.${name} is not supported.`);
    return nameAndFullname;
  }

  /** フルネームを使用したファクトリメソッド */
  static from(fullname: string): NameAndFullname {
    const nameAndFullname = NameAndFullname.values.find((v) => v.constructor.name === this.name && v.fullname === fullname);
    if (nameAndFullname === undefined) throw new Error(`${this.name}.${fullname} is not supported.`);
    return nameAndFullname;
  }

  toString(): string {
    return this.fullname;
  }
}

/** 基底クラスをそのまま利用 */
class Sex extends NameAndFullname {
  static readonly M = new Sex('M', 'Male');
  static readonly F = new Sex('F', 'Female');
}

/** 基底クラスを一部拡張 */
class Color extends NameAndFullname {
  private hex: string; // Color 特有のプロパティ
  static readonly B = new Color('B', 'Black', '#000000');
  static readonly W = new Color('W', 'White', '#FFFFFF');

  // constructorを上書き
  constructor(name: string, fullname: string, hex: string) {
    super(name, fullname);
    this.hex = hex;
  }

  // toString を上書き
  toString(): string {
    return `${this.fullname}(${this.hex})`; // hex も出力
  }
}

test('create by factory method', async () => {
  expect(Sex.of('M')).toBe(Sex.M);
  expect(Sex.of('F')).toBe(Sex.F);
  expect(Sex.from('Male')).toBe(Sex.M);
  expect(Sex.from('Female')).toBe(Sex.F);
  expect(Color.of('B')).toBe(Color.B);
  expect(Color.of('W')).toBe(Color.W);
  expect(Color.from('Black')).toBe(Color.B); // ちゃんと上書きした toString() が利用されている
  expect(Color.from('White')).toBe(Color.W); // ちゃんと上書きした toString() が利用されている
});

test('toString returns fullname', async () => {
  expect(Sex.of('M').toString()).toBe('Male');
  expect(Sex.of('F').toString()).toBe('Female');
  expect(Color.of('B').toString()).toBe('Black(#000000)');
  expect(Color.of('W').toString()).toBe('White(#FFFFFF)');
});
