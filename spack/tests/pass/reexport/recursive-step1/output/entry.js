const c = 'c';
const c1 = c;
const b2 = c1;
const __default = b2;
const __default1 = __default;
console.log('c');
console.log('b');
const b1 = __default1;
console.log('a.js');
export { b1 as b };
console.log('entry');
