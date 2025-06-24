//9. Given an integer x, return true if x is a palindrome, and false otherwise.

const isPalindrome = x => {
    const string= x.toString();
    const reverseFuncton= str => str.split('').reverse().join('');
    const reverseString= reverseFuncton(string);
    const returnType= (string === reverseString)? true: false
    return returnType;
};
const x= 121;
console.log(isPalindrome(x));