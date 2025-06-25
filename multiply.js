// 43. Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

const multiply = (num1, num2) => {
    const number1= Number(num1)
    const number2= Number(num2)
    const mul= number1* number2
    return mul.toString()
};

const num1= "3"
const num2= "4"
console.log(multiply(num1, num2))