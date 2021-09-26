import { thrice, plusStatic } from './other';
import OtherClass from './otherClass';

/** 文字列を2回繰り返す */
export const twice = (str: string): string => {
  return str + str;
};

/** 文字列を2回＋3回で合計5回繰り返す */
export const twiceAndThrice = (str: string): string => {
  return twice(str) + thrice(str);
};

/** 文字列を2回繰り返し固定文字列を追加する */
export const twicePlusStatic = (str: string): string => {
  return plusStatic(twice(str));
};

/** 文字列を2回繰り返し固定文字列を追加する（クラスバージョン） */
export const twicePlusStaticClass = (str: string): string => {
  return OtherClass.plusStatic(twice(str));
};
