export default class OtherClass {
  static staticStr = 'staticClass';
  static once = (str: string): string => {
    return str;
  }
  static plusStatic = (str: string): string => {
    return str + this.staticStr;
  }
}