//2. You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

function reverseString(str){
    return str.split('').reverse().join('')
}

function numberMaking (arr){
    let tag= 1 //determiner
    let number=0
    if(arr.length>= 2){
        for(let i=1; i<arr.length; i++)
            tag*=10
    }
    for(let i=arr.length-1; i>-1; i--){
        number= number+ tag* arr[i]
        tag/=10
    }
    return number
}

function addTwoNumbers(l1, l2){
    const number1= numberMaking(l1)
    const number2= numberMaking(l2)
    return number1+ number2
}

const l1=[9,9,9,9,9,9,9]
const l2= [9,9,9,9]

const numberAddition= addTwoNumbers(l1, l2)
const finalStringNumber= reverseString(numberAddition.toString()).split('')
const finalNumber= finalStringNumber.map(Number)
console.log(finalNumber)

