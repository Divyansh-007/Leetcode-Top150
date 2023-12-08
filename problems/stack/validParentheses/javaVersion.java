class Solution {
  public boolean isValid(String s) {
    Stack < Character > stack = new Stack < > ();

    for (int i = 0; i < s.length(); i++) {
      char curr = s.charAt(i);

      if (stack.isEmpty()) {
        stack.push(curr);
        continue;
      } else {
        char prev = stack.peek();
        if (curr == '{' || curr == '(' || curr == '[') {
          stack.push(curr);
        } else if ((curr == '}' && prev == '{') || (curr == ')' && prev == '(') || (curr == ']' && prev == '[')) {
          stack.pop();
        } else {
          stack.push(curr);
        }
      }
    }

    return stack.isEmpty();
  }
}