//remove duplicate items of an array and get an array with no duplicate
const removeDuplicates = (nums)=> {
    for(let i=0; i<nums.length; i++){
        if (!expectedNums.includes(nums[i])) expectedNums.push(nums[i])
    }
    return expectedNums.length
};

const nums= [0,0,1,1,1,2,2,3,3,4]
const expectedNums= []
const k= removeDuplicates(nums)
console.log(k)