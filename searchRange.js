// 34. Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

const searchRange = (nums, target) => {
    const result=[]
    for(let i=0; i<nums.length; i++){
        if(nums[i]=== target)
            result.push(i)
    }
    
    if(!result.length) 
        return [-1, -1]
    
    return result
};


const nums= [2]
const target= 2
console.log(searchRange(nums, target))