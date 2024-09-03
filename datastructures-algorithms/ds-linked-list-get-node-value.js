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
 * Complete the 'getNode' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER positionFromTail
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function getNode(llist, positionFromTail) {
  // Write your code here
  let current = llist; // Start with the head of the list
  let length = 0; // Initialize length counter

  // First, find the length of the linked list
  while (current != null) {
    length++;
    current = current.next;
  }

  // Calculate the position from the head
  let positionFromHead = length - positionFromTail - 1;
  current = llist; // Reset current to the head

  // Traverse to the required position
  for (let i = 0; i < positionFromHead; i++) {
    current = current.next;
  }

  // Return the data at the calculated position
  return current.data;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const tests = parseInt(readLine(), 10);

  for (let testsItr = 0; testsItr < tests; testsItr++) {
    const llistCount = parseInt(readLine(), 10);

    let llist = new SinglyLinkedList();

    for (let i = 0; i < llistCount; i++) {
      const llistItem = parseInt(readLine(), 10);
      llist.insertNode(llistItem);
    }

    const position = parseInt(readLine(), 10);

    let result = getNode(llist.head, position);

    ws.write(result + "\n");
  }

  ws.end();
}
