const staticStr = 'static';

/** 文字列を3回繰り返す */
export const thrice = (str: string): string => {
  return str + str + str;
};

/** 文字列に固定文字列を追加して返す */
export const plusStatic = (str: string): string => {
  return str + staticStr;
};
