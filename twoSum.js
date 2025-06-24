//1. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const nums= [2,5,5,11];
target= 10;
const twoSum= (nums, target) =>{
    const indices= [];
    for(let i=0; i<=nums.length; i++){
        for(let j=i+1; j<=nums.length; j++){
            const addition= nums[i]+nums[j];
            if(addition== target) indices.push(i,j);
            if(indices.length !=0) break;
        }
        if(indices.length !=0) break;
    }
    return indices;
}
console.log(twoSum(nums, target))