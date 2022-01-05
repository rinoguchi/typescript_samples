import { plusFixedStrWithStaticMethod, plusFixedStrWithInstanceMethod } from '../../src/jest/useClassMethod';
import OtherClass from '../../src/jest/otherClass';

// 対象のモジュールをモックする。関数の中ではなくトップレベルに記載必要
jest.mock('../../src/jest/otherClass');

beforeEach(() => {
  jest.clearAllMocks(); // モックをクリアする
});

test('mock static method', () => {
  const mockPlusFixedStrByStaticMethod = OtherClass.plusFixedStrByStaticMethod as jest.Mock;
  mockPlusFixedStrByStaticMethod.mockReturnValueOnce('mock'); // 内部で呼び出しているstatic関数をmock
  const actual = plusFixedStrWithStaticMethod('input');
  expect(actual).toBe('mock'); // モック値が返っている
  expect(mockPlusFixedStrByStaticMethod.mock.calls.length).toBe(1); // mock関数の呼び出し回数チェック
  expect(mockPlusFixedStrByStaticMethod.mock.calls[0][0]).toBe('input'); // mock関数の1回目の呼び出しの第一引数チェック
});

test('mock instance method', () => {
  const mockPlusFixedStrByInstanceMethod = OtherClass.prototype.plusFixedStrByInstanceMethod as jest.Mock;
  mockPlusFixedStrByInstanceMethod.mockReturnValueOnce('mock'); // 内部で呼び出しているinstance関数をmock
  const actual = plusFixedStrWithInstanceMethod('input');
  expect(actual).toBe('mock'); // モック値が返っている
  expect(mockPlusFixedStrByInstanceMethod.mock.calls.length).toBe(1); // mock関数の呼び出し回数チェック
  expect(mockPlusFixedStrByInstanceMethod.mock.calls[0][0]).toBe('input'); // mock関数の1回目の呼び出しの第一引数チェック
});
