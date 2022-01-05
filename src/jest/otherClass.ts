export default class OtherClass {
  static fixedStr = 'fixed';

  static plusFixedStrByStaticMethod(str: string): string {
    return str + this.fixedStr;
  }

  plusFixedStrByInstanceMethod(str: string): string {
    return str + OtherClass.fixedStr;
  }
}
