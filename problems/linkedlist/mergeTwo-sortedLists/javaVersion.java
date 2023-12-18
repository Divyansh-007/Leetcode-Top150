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
  public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
    if (list1 == null) {
      return list2;
    } else if (list2 == null) {
      return list1;
    }

    ListNode mergedHead = null;
    ListNode mergedTail = null;

    ListNode t1 = list1;
    ListNode t2 = list2;

    if (t1.val <= t2.val) {
      mergedHead = new ListNode(t1.val);
      mergedTail = mergedHead;
      t1 = t1.next;
    } else {
      mergedHead = new ListNode(t2.val);
      mergedTail = mergedHead;
      t2 = t2.next;
    }

    while (t1 != null && t2 != null) {
      if (t1.val <= t2.val) {
        mergedTail.next = new ListNode(t1.val);
        mergedTail = mergedTail.next;
        t1 = t1.next;
      } else {
        mergedTail.next = new ListNode(t2.val);
        mergedTail = mergedTail.next;
        t2 = t2.next;
      }
    }

    if (t1 != null) {
      mergedTail.next = t1;
    }

    if (t2 != null) {
      mergedTail.next = t2;
    }

    return mergedHead;
  }
}