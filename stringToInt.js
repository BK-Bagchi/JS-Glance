// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

// The algorithm for myAtoi(string s) is as follows:

// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
// Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
// Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
// Return the integer as the final result.


const myAtoi = (s) => {
    s= s.trim()
    const matchingNumbers= ['0', '1','2', '3', '4', '5', '6', '7', '8', '9']
    const minus= '-'
    let number= '';
    let determiner= 1
    
    for(let i=0; i<s.length; i++){
        if(matchingNumbers.includes(s[i])){
            number= number.concat(s[i])
            if(s[0]== '-' || s[i-1]== '-')
                determiner= -1
        }
        else if (s[i] == '-' || s[i] == '+'){
            if(i!= 0)
                break
        }
        else break
    }
    
    let result = Number(number) * determiner;
    const INT_MIN = -2147483648;
    const INT_MAX = 2147483647;

    if (result < INT_MIN) return INT_MIN;
    if (result > INT_MAX) return INT_MAX;

    return result;
    
};

// const s= "     -1123ads1212"
// const s= "1337c0d3"
// const s="   -042"
// const s= "-91283472332"
const s= '+1'
console.log(myAtoi(s))