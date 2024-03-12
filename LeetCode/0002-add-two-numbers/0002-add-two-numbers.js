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
    let carry = 0;
    let result = new ListNode(-1);
    let dummy = result;
    
    while(l1 || l2 || carry ){
        let l1Val = l1 ? l1.val : 0;
        let l2Val = l2 ? l2.val : 0;
        
        let nextNode = (l1Val + l2Val + carry) % 10;
        
        result.next = new ListNode(nextNode);
        result = result.next
        
        carry = Math.floor((l1Val + l2Val + carry)/10);
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    return dummy.next;
};