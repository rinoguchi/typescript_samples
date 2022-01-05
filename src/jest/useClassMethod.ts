import OtherClass from './otherClass';

/** 固定文字列を追加する（classのstatic関数を利用） */
export const plusFixedStrWithStaticMethod = (str: string): string => {
  return OtherClass.plusFixedStrByStaticMethod(str);
};

/** 固定文字列を追加する（classのinstance関数を利用） */
export const plusFixedStrWithInstanceMethod = (str: string): string => {
  return new OtherClass().plusFixedStrByInstanceMethod(str);
};
