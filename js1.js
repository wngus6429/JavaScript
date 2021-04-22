// function min(a, b) {
//   if (a > b) {
//     return b;
//   }
//   return a;
// }

function min(a, b) {
  return a < b ? a : b;
}

console.log("올", min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

function pow(x, n) {
  return x ** n;
}
let p1 = prompt("x의 값은?");
let p2 = prompt("몇번 제곱할래?");
alert(pow(p1, p2));
