import { thrice } from './otherModule';

/** 文字列を2回繰り返す */
export const twice = (str: string): string => {
  return str + str;
};

/** 文字列を2回＋3回で合計5回繰り返す */
export const twiceAndThrice = (str: string): string => {
  return twice(str) + thrice(str);
};
