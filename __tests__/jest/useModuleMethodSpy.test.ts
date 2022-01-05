import { twice, twiceAndThrice } from '../../src/jest/useModuleMethod';
import * as otherModule from '../../src/jest/otherModule'; // `*` importして別名をつける

describe('with spy', () => {
  test('twiceAndThrice', () => {
    const spy = jest.spyOn(otherModule, 'thrice'); // 内部で呼び出しているmodule関数をspy
    spy.mockReturnValueOnce('mock'); // thrice関数の戻り値をモック
    const actual = twiceAndThrice('input');
    expect(actual).toBe('inputinputmock'); // inputが2回とmock値が連結された結果が返っている
  });
});

describe('real', () => {
  test('twice', () => {
    const actual = twice('input');
    expect(actual).toBe('inputinput'); // inputが2回繰り返された結果が返っている
  });

  test('twiceAndThrice', () => {
    const actual = twiceAndThrice('input');
    expect(actual).toBe('inputinputinputinputinput'); // inputが5回繰り返された結果が返っている
  });
});
