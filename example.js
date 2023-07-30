console.log("Hello, there!!");
var isEven = require("is-even");
console.log(isEven(0));
var isPrime = require("quick-is-prime");
console.log(isPrime(47));
for (var i = 0; i < 10; i++) {
  console.log(i);
}
function evenorodd(a) {
  if (a % 2 == 0) {
    console.log("Number is even");
  } else {
    console.log("Number is odd");
  }
}
evenorodd(3);
var cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "I'm a cow",
    e: "$$",
    T: "XX ",
  })
);
const isFactorial = require("is-factorial");
console.log(isFactorial(120));
var check = require("perfect-number");

check.isPerfectNumber(5, (err, value) => {
  console.log(value); //false
});

var isString = require("is-string");
var assert = require("assert");

console.log(assert.ok(isString("foo")));
console.log(assert.ok(isString(Object("foo"))));
