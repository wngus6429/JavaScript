function sayHello(name, age) {
  console.log("hello!", name, age);
}
sayHello("nicolas", 15); //hello! nicolas 15

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
function ssayHello(name, age) {
  return `Hello ${name} you are ${age} years old`;
}
const greeting = ssayHello("juhyun", 29);
console.log(greeting); //Hello juhyun you are 29 years old

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
const calculator = {
  plus: function (a, b) {
    return a * b;
  },
};
const plus = calculator.plus(5, 5);
console.log(plus); //25

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
function getTotalVar() {
  //  # START:totalVar
  var taxRate = 0.1;
  var total = 100 + 100 * taxRate;
  return `Your Order is ${total}`;
  //  # END:totalVar
}
console.log(getTotalVar()); //Your Order is 110
