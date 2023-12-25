/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode head = null;
        ListNode tail = null;
        ListNode t1 = l1;
        ListNode t2 = l2;

        int carry = 0;
        int sum = t1.val + t2.val;

        if(sum > 9){
            carry = sum / 10;
            sum = sum % 10;
        }

        head = new ListNode(sum);
        tail = head;
        t1 = t1.next;
        t2 = t2.next;

        while(t1 != null && t2 != null){
            sum = t1.val + t2.val + carry;

            if(sum > 9){
                carry = sum / 10;
                sum = sum % 10;
            }else{
                carry = 0;
            }

            tail.next = new ListNode(sum);
            tail = tail.next;
            t1 = t1.next;
            t2 = t2.next;   
        }

        if(t1 != null){
            while(t1 != null){
                sum = t1.val + carry;

                if(sum > 9){
                    carry = sum / 10;
                    sum = sum % 10;
                }else{
                    carry = 0;
                }

                tail.next = new ListNode(sum);
                tail = tail.next;
                t1 = t1.next;
            }
        }else{
            while(t2 != null){
                sum = t2.val + carry;

                if(sum > 9){
                    carry = sum / 10;
                    sum = sum % 10;
                }else{
                    carry = 0;
                }

                tail.next = new ListNode(sum);
                tail = tail.next;
                t2 = t2.next;
            }
        }

        if(carry > 0){
            tail.next = new ListNode(carry);
        }

        return head;
    }
}