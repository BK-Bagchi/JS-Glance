//29. Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

// The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

// Return the quotient after dividing dividend by divisor.


const divide = (dividend, divisor) => {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    if (dividend === INT_MIN && divisor === -1) {
        return INT_MAX;
    }
    return Math.trunc(dividend / divisor);
};

const dividend= -2147483648
const divisor= -1

console.log(divide(dividend, divisor))