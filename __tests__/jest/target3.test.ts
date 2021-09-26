import { twicePlusStaticClass } from '../../src/jest/target';
import OtherClass from '../../src/jest/otherClass'; // astariskでモジュール全体に別名をつけておく

test('real', () => {
  const actual = twicePlusStaticClass('input');
  expect(actual).toBe('inputinputstaticClass'); // inputが2回+固定値が返っている
});

test('with spy', () => {
  const spyPlusStatic = jest.spyOn(OtherClass, 'plusStatic');
  spyPlusStatic.mockReturnValueOnce('mock');
  const actual = twicePlusStaticClass('input');
  expect(actual).toBe('mock'); // モック値が返っている
  expect(spyPlusStatic.mock.calls.length).toBe(1); // mock関数の呼び出し回数チェック
  expect(spyPlusStatic.mock.calls[0][0]).toBe('inputinput'); // mock関数の1回目の呼び出しの第一引数チェック
});
