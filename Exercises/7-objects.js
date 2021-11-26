'use strict';

const fn = () => {
  const a = { name: 'foo' };
  let b = { name: 'bar' };
  //can change the inner structure of const value
  a.name = 'bar';
  b.name = 'foo';
  //doesn't work - can't assign a value to a const indentifier
  //objectFirst = objectSecond;
  b = a;
};

module.exports = { fn };
