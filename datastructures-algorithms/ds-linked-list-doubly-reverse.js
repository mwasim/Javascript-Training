/*
Given the pointer to the head node of a doubly linked list, reverse the order of the nodes in place.That is, change the next and prev pointers of the nodes so that the direction of the list is reversed.Return a reference to the head node of the reversed list.

Note: The head node might be NULL to indicate that the list is empty.
*/
const DoublyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
    this.prev = null;
  }
};

const DoublyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    let node = new DoublyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }

    this.tail = node;
  }
};

function printDoublyLinkedList(node, sep, ws) {
  while (node != null) {
    ws.write(String(node.data));

    node = node.next;

    if (node != null) {
      ws.write(sep);
    }
  }
}

/*
 * Complete the 'reverse' function below.
 *
 * The function is expected to return an INTEGER_DOUBLY_LINKED_LIST.
 * The function accepts INTEGER_DOUBLY_LINKED_LIST llist as parameter.
 */

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */

function reverse(llist) {
  // Initialize three pointers: current, previous, and next
  let current = llist; // Start at the head of the list
  let previous = null; // Previous node, initially null

  // Traverse the list until we reach the end (current becomes null)
  while (current !== null) {
    // Store the next node in 'next' before we reverse the 'next' pointer
    let next = current.next;

    // Reverse the 'next' pointer of the current node
    current.next = previous;

    // Reverse the 'prev' pointer of the current node
    current.prev = next;

    // Move 'previous' and 'current' one step forward
    previous = current;
    current = next;
  }

  // When the loop ends, 'previous' points to the new head of the reversed list
  return previous;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const llistCount = parseInt(readLine(), 10);

    let llist = new DoublyLinkedList();

    for (let i = 0; i < llistCount; i++) {
      const llistItem = parseInt(readLine(), 10);
      llist.insertNode(llistItem);
    }

    let llist1 = reverse(llist.head);

    printDoublyLinkedList(llist1, " ", ws);
    ws.write("\n");
  }

  ws.end();
}
