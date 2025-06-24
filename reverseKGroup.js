//25. Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

const reverseKGroup = (head, k) => {
    const subHead= []
    for(let i=0; i<= k; i++)
        subHead[i]= head[i]
    
    for(let i=0, j=k; i<=k, j>=0; i++, j--)
        head[i]= subHead[j]
};

const head= [1,2,3,4,5]
const k= 2
reverseKGroup(head, k-1)
console.log(head)