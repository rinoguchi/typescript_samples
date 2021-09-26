import { twicePlusStaticClass } from '../../src/jest/target';
import OtherClass from '../../src/jest/otherClass';

// 対象のモジュールをモックする。関数の中ではなくトップレベルに記載必要
jest.mock('../../src/jest/otherClass');
const mockPlusStatic = OtherClass.plusStatic as jest.Mock; // typescriptの場合はキャストが必要

beforeEach(() => {
  mockPlusStatic.mockClear(); // モックをクリアする
});

test('with mock', () => {
  mockPlusStatic.mockReturnValueOnce('mock');
  const actual = twicePlusStaticClass('input');
  expect(actual).toBe('mock'); // モック値が返っている
  expect(mockPlusStatic.mock.calls.length).toBe(1); // mock関数の呼び出し回数チェック
  expect(mockPlusStatic.mock.calls[0][0]).toBe('inputinput'); // mock関数の1回目の呼び出しの第一引数チェック
});
