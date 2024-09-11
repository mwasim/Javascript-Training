/*
    Given a reference to the head of a doubly - linked list and an integer, data, create a new DoublyLinkedListNode object having data value data and insert it at the proper location to maintain the sort.
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
 * Complete the 'sortedInsert' function below.
 *
 * The function is expected to return an INTEGER_DOUBLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_DOUBLY_LINKED_LIST llist
 *  2. INTEGER data
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

function sortedInsert(llist, data) {
  // Write your code here
  // Create a new node with the given data
  let node = new DoublyLinkedListNode(data);

  // If the list is empty or the new node's data is smaller than the head's data,
  // insert the new node at the beginning
  if (llist == null || llist.data >= node.data) {
    node.next = llist;
    if (llist != null) {
      llist.prev = node;
    }
    return node;
  }

  // Traverse the list to find the proper location for the new node
  let current = llist;
  while (current.next != null && current.next.data < node.data) {
    current = current.next;
  }

  // Insert the new node at the proper location
  node.next = current.next;
  node.prev = current;
  if (current.next != null) {
    current.next.prev = node;
  }
  current.next = node;

  return llist;
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

    const data = parseInt(readLine(), 10);

    let llist1 = sortedInsert(llist.head, data);

    printDoublyLinkedList(llist1, " ", ws);
    ws.write("\n");
  }

  ws.end();
}
