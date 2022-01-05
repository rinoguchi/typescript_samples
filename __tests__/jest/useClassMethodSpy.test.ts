import { plusFixedStrWithStaticMethod, plusFixedStrWithInstanceMethod } from '../../src/jest/useClassMethod';
import OtherClass from '../../src/jest/otherClass';

describe('static method', () => {
  test('real', () => {
    const actual = plusFixedStrWithStaticMethod('input');
    expect(actual).toBe('inputfixed'); // input+固定値が返っている
  });

  test('with spy', () => {
    const spy = jest.spyOn(OtherClass, 'plusFixedStrByStaticMethod'); // 内部で呼び出してるstatic関数をspy
    spy.mockReturnValueOnce('mock');
    const actual = plusFixedStrWithStaticMethod('input');
    expect(actual).toBe('mock'); // モック値が返っている
    expect(spy.mock.calls.length).toBe(1); // mock関数の呼び出し回数チェック
    expect(spy.mock.calls[0][0]).toBe('input'); // mock関数の1回目の呼び出しの第一引数チェック
  });
});

describe('instance method', () => {
  test('real', () => {
    const actual = plusFixedStrWithInstanceMethod('input');
    expect(actual).toBe('inputfixed'); // input+固定値が返っている
  });

  test('with spy', () => {
    const spy = jest.spyOn(OtherClass.prototype, 'plusFixedStrByInstanceMethod'); // 内部で呼び出してるinstance関数をspy
    spy.mockReturnValueOnce('mock');
    const actual = plusFixedStrWithInstanceMethod('input');
    expect(actual).toBe('mock'); // モック値が返っている
    expect(spy.mock.calls.length).toBe(1); // mock関数の呼び出し回数チェック
    expect(spy.mock.calls[0][0]).toBe('input'); // mock関数の1回目の呼び出しの第1引数チェック
  });
});
