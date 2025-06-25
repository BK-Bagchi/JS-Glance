//23. You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

const mergeKLists = (lists) => {
    if(lists[0].length){
        const holdLists= []
        for(let i=0; i<lists.length; i++){
            for(let j=0; j<lists[i].length; j++)
                holdLists.push(lists[i][j])
        }
        return holdLists.sort()
    }
    else
        return lists.sort()
};

const lists= [[9,3,7],[2,8,1],[6,5,4]]
// const lists= [9,3,7,2,8,1,6,5,4]
console.log(mergeKLists(lists))