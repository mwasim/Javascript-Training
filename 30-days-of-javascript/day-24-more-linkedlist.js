/*
    Task
    A Node class is provided for you in the editor. A Node object has an integer data field, data, and a Node instance pointer, next, pointing to another node (i.e.: the next node in a list).

    A removeDuplicates function is declared in your editor, which takes a pointer to the head node of a linked list as a parameter. Complete removeDuplicates so that it deletes any duplicate nodes from the list and returns the head of the updated list.

    Note: The head pointer may be null, indicating that the list is empty. Be sure to reset your next pointer when performing deletions to avoid breaking the list.
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function Solution() {
  this.removeDuplicates = function (head) {
    //Write your code here
    if (!head || !head.next) {
      return head;
    }

    let seen = new Set();
    let current = head;
    let prev = null;

    while (current) {
      if (seen.has(current.data)) {
        // Skip the duplicate node
        if (prev) {
          prev.next = current.next;
        } else {
          // Update the head if the first node is a duplicate
          head = current.next;
        }
        current = current.next;
      } else {
        seen.add(current.data);
        prev = current;
        current = current.next;
      }
    }

    return head;
  };

  this.insert = function (head, data) {
    var p = new Node(data);
    if (head == null) {
      head = p;
    } else if (head.next == null) {
      head.next = p;
    } else {
      var start = head;
      while (start.next != null) {
        start = start.next;
      }
      start.next = p;
    }
    return head;
  };

  this.display = function (head) {
    var start = head;
    while (start) {
      console.log(start.data + " ");
      start = start.next;
    }
  };
}
function main(inputArr) {
  var head = null;
  var mylist = new Solution();
  for (i = 0; i < inputArr.length; i++) {
    var data = parseInt(inputArr[i]);
    head = mylist.insert(head, data);
  }
  head = mylist.removeDuplicates(head);
  mylist.display(head);
}

const inputArr = [1, 2, 2, 3, 3, 4];
main(inputArr);
