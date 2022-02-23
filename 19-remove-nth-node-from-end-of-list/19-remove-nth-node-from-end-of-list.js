var removeNthFromEnd = function(head, n) {


//count the length of linked list
let current = head;
let length = 1;
while(current.next !== null){
    length+=1;
    current = current.next;
}

//edge case
if(n === 1 && length === 1) return null;

let indexToRemove = (length-n)+1;


 //if head needs to be removed
if(indexToRemove === 1){
    head = head.next;
    return head;
}
//remove element
current = head; 
let idx = 1;  
while(current.next!==null){
    if(idx+1 === indexToRemove){
        current.next = current.next.next;
        break;
    }
    current = current.next;
    idx+=1;
}


return head;
}