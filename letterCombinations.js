//17. Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

const letterCombinations = (digits) => {
    const digitToLetter = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    // Filter out invalid digits like '0' and '1'
    const filteredDigits = digits.split('').filter(d => digitToLetter[d]);
    if (!filteredDigits.length) return [];

    const result = [];

    const backtrack = (index, path) => {
        if (path.length === filteredDigits.length) {
            result.push(path);
            return;
        }

        const currentDigit = filteredDigits[index];
        const letters = digitToLetter[currentDigit];

        for (let letter of letters) {
            backtrack(index + 1, path + letter);
        }
    };

    backtrack(0, '');
    return result;
};
console.log(letterCombinations("234")); 