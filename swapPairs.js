//24. Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

const swapPairs = (head) => {
    let swap= 0
    let headLength
    (head.length % 2== 0)? headLength= head.length: headLength= head.length-1
    
    for(let i=0; i<headLength; i+=2){
        swap= head[i]
        head[i]= head[i+1]
        head[i+1]= swap
    }
};

const head= [1,2,3]
swapPairs(head)
console.log(head)