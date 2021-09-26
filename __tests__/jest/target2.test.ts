import { twicePlusStatic } from '../../src/jest/target';
import * as other from '../../src/jest/other'; // astariskでモジュール全体に別名をつけておく

test('real', () => {
  const actual = twicePlusStatic('input');
  expect(actual).toBe('inputinputstatic'); // inputが2回+固定値が返っている
});

test('with spy', () => {
  const spyPlusStatic = jest.spyOn(other, 'plusStatic');
  spyPlusStatic.mockReturnValueOnce('mock');
  const actual = twicePlusStatic('input');
  expect(actual).toBe('mock'); // モック値が返っている
  expect(spyPlusStatic.mock.calls.length).toBe(1); // mock関数の呼び出し回数チェック
  expect(spyPlusStatic.mock.calls[0][0]).toBe('inputinput'); // mock関数の1回目の呼び出しの第一引数チェック
});
