import { twice, twiceAndThrice } from '../../src/jest/target';
import { thrice } from '../../src/jest/other';

// 対象のモジュールをモックする。関数の中ではなくトップレベルに記載必要
jest.mock('../../src/jest/other');
const mockThrice = thrice as jest.Mock; // typescriptの場合はキャストが必要

/** 各テスト実行前に行われる共通処理 */
beforeEach(() => {
  mockThrice.mockClear(); // モックをクリアする
});

/** describeでテストをグルーピングできる */
describe('without mock', () => {
  test('twice', () => {
    const actual = twice('input');
    expect(actual).toBe('inputinput'); // inputが2回繰り返された結果が返っている
  });
});

describe('with mock', () => {
  test('twiceAndThrice', () => {
    mockThrice.mockReturnValueOnce('mock'); // モック関数の戻り値を指定
    const actual = twiceAndThrice('input');
    expect(actual).toBe('inputinputmock'); // 本来はinputが5回繰り返されるが、内部で呼び出しているthrice関数の戻り値部分がmockになっている
    expect(mockThrice.mock.calls.length).toBe(1); // mock関数の呼び出し回数チェック
    expect(mockThrice.mock.calls[0][0]).toBe('input'); // mock関数の1回目の呼び出しの第一引数チェック
  });
});
