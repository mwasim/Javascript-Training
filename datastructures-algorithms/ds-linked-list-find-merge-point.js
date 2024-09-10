/*
    Given pointers to the head nodes of 2 linked lists that merge together at some point, find the node where the two lists merge. The merge point is where both lists point to the same node, i.e. they reference the same memory location. It is guaranteed that the two head nodes will be different, and neither will be NULL. If the lists share a common node, return that node's data value.

    Note: After the merge point, both lists will share the same node pointers.
*/
const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }
};

function printSinglyLinkedList(node, sep, ws) {
  while (node != null) {
    ws.write(String(node.data));

    node = node.next;

    if (node != null) {
      ws.write(sep);
    }
  }
}

/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function findMergeNode(headA, headB) {
  let currentA = headA;
  let currentB = headB;

  // Calculate the lengths of both lists
  let lengthA = 0;
  let lengthB = 0;

  while (currentA) {
    lengthA++;
    currentA = currentA.next;
  }

  while (currentB) {
    lengthB++;
    currentB = currentB.next;
  }

  // Reset pointers to the heads of both lists
  currentA = headA;
  currentB = headB;

  // Advance the pointer of the longer list
  if (lengthA > lengthB) {
    for (let i = 0; i < lengthA - lengthB; i++) {
      currentA = currentA.next;
    }
  } else {
    for (let i = 0; i < lengthB - lengthA; i++) {
      currentB = currentB.next;
    }
  }

  // Move both pointers until they meet
  while (currentA !== currentB) {
    currentA = currentA.next;
    currentB = currentB.next;
  }

  // Return the data at the merge point
  return currentA.data;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const tests = parseInt(readLine(), 10);

  for (let testsItr = 0; testsItr < tests; testsItr++) {
    const index = parseInt(readLine(), 10);

    const llist1Count = parseInt(readLine(), 10);

    let llist1 = new SinglyLinkedList();

    for (let i = 0; i < llist1Count; i++) {
      const llist1Item = parseInt(readLine(), 10);
      llist1.insertNode(llist1Item);
    }

    const llist2Count = parseInt(readLine(), 10);

    let llist2 = new SinglyLinkedList();

    for (let i = 0; i < llist2Count; i++) {
      const llist2Item = parseInt(readLine(), 10);
      llist2.insertNode(llist2Item);
    }

    let ptr1 = llist1.head;
    let ptr2 = llist2.head;

    for (let i = 0; i < llist1Count; i++) {
      if (i < index) {
        ptr1 = ptr1.next;
      }
    }

    for (let i = 0; i < llist2Count; i++) {
      if (i != llist2Count - 1) {
        ptr2 = ptr2.next;
      }
    }

    ptr2.next = ptr1;

    let result = findMergeNode(llist1.head, llist2.head);

    ws.write(result + "\n");
  }

  ws.end();
}
