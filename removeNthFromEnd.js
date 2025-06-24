//19. Given the head of a linked list, remove the nth node from the end of the list and return its head

const removeNthFromEnd = (head, n) => {
    const headLength= head.length
    const remove= (headLength-n)+1
    const result= []
    for(let i=0; i<head.length; i++){
        if(head[i] != head[remove-1])
            result.push(head[i])
    }
    return result
};

const head= [1,2]
const n= 1
console.log(removeNthFromEnd(head, n))