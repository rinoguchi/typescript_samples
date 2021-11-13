class ParentMember {
  static readonly keys = ['aa', 'bb'];
}

class ChildMember1 extends ParentMember {
  static readonly keys = ParentMember.keys.concat(['cc1', 'dd1']);
}

class ChildMember2 extends ParentMember {
  static readonly keys = ParentMember.keys.concat(['cc2', 'dd2']);
}

test('overwrite? parent keys', () => {
  expect(ParentMember.keys).toStrictEqual(['aa', 'bb']);
  expect(ChildMember1.keys).toStrictEqual(['aa', 'bb', 'cc1', 'dd1']);
  expect(ChildMember2.keys).toStrictEqual(['aa', 'bb', 'cc2', 'dd2']);
});
