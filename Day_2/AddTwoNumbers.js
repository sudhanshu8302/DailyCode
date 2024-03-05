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
const addNode = (l1, l2, isCarry) => {
    if(l1 == null && l2 == null && !isCarry ) return null;

    let val = (l1 != null ? l1.val : 0) + (l2 != null ? l2.val : 0) + (isCarry ? 1 : 0);
    let carry = val > 9;
    if(carry) val = val-10;

    return new ListNode(val, addNode(l1?.next, l2?.next, carry));
}

var addTwoNumbers = function(l1, l2) {
    return addNode(l1, l2, 0);
};