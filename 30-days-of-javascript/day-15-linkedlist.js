/*
    Task:
    Complete the insert function in your editor so that it creates a new Node (pass data as the Node constructor argument) and inserts it at the tail of the linked list referenced by the head parameter. Once the new node is added, return the reference to the head node.

    Note: The head argument is null for an empty list.
*/
function Node(data) {
  this.data = data;
  this.next = null;
}

function Solution() {
  this.insert = function (head, data) {
    //complete this method
    const node = new Node(data);
    if (!head) {
      return node;
    }

    let current = head;
    while (current.next) {
      current = current.next;
    }

    current.next = node;

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
function main() {
  var T = 4;
  var head = null;
  var mylist = new Solution();
  const items = [2, 3, 4, 1];
  for (i = 0; i < items.length; i++) {
    var data = items[i];
    head = mylist.insert(head, data);
  }
  mylist.display(head);
}

main();
