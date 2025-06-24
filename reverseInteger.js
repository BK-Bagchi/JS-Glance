//7. Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

const is32BitInteger= (n) => {
  return n >= -2147483648 && n <= 2147483647;
}

const determiner= (number, multiplier) => {
    const numberToString= number.toString()
    const reverseString= numberToString.split('').reverse().join('')
    const stringToNumber= Number(reverseString)
    
    return stringToNumber*multiplier
}

const reverse = (x) => {
    let number=0 ;
    if(x> 0){
        number= determiner(x, 1)
    }
    else if(x< 0){
        x= x*(-1)
        number= determiner(x, -1)
    }
    else number=0
    
    is32BitInteger(number)? number= number: number= 0
    return number
};

const x= 1534236469
console.log(reverse(x))