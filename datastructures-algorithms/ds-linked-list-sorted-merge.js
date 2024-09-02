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

// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
  // Create a dummy node to serve as the starting point for the merged list
  let dummyNode = new SinglyLinkedListNode(0);
  let current = dummyNode;

  // Traverse both lists and append the smaller node to the merged list
  while (head1 !== null && head2 !== null) {
    if (head1.data <= head2.data) {
      current.next = head1;
      head1 = head1.next;
    } else {
      current.next = head2;
      head2 = head2.next;
    }
    current = current.next; // Move the current pointer
  }

  // If there are remaining nodes in either list, append them
  if (head1 !== null) {
    current.next = head1;
  } else if (head2 !== null) {
    current.next = head2;
  }

  // The merged list starts from the next node of the dummy node
  return dummyNode.next;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const tests = parseInt(readLine(), 10);

  for (let testsItr = 0; testsItr < tests; testsItr++) {
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

    let llist3 = mergeLists(llist1.head, llist2.head);

    printSinglyLinkedList(llist3, " ", ws);
    ws.write("\n");
  }

  ws.end();
}
