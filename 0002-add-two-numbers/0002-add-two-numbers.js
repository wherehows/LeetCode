/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let res = new ListNode(0);
    let temp = res;
    let surplus = 0;
    
    while(l1 || l2 || surplus) {
            let current1 = (l1 && l1.val) || 0;
            let current2 = (l2 && l2.val) || 0;
            const sum = current1 + current2 + surplus;
        
            let numberToStore = sum >= 10 ? (surplus = 1, sum % 10) : (surplus = 0, sum);
            temp.val = numberToStore;
            
            if((l1 && l1.next) || (l2 && l2.next) || surplus) {
                temp.next = new ListNode(0);
                temp = temp.next;
            }
        
            l1 = (l1 && l1.next) || null;
            l2 = (l2 && l2.next) || null;
          }
    
    return res;
};