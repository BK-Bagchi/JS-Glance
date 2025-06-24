// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

const  findMedianSortedArrays = (nums1, nums2) => {
    const mergedArray= nums1.concat(nums2).sort((a, b) => a - b)
    console.log(mergedArray)
    let n=mergedArray.length
    
    if (n % 2 === 0) 
        return (mergedArray[n / 2 - 1] + mergedArray[n / 2]) / 2;
    else
        return mergedArray[Math.floor(n / 2)];
};

const nums1=[1,2,3,4,5]
const nums2= [6,7,8,9,10,11,12,13,14,15,16,17]
console.log(findMedianSortedArrays(nums1, nums2))