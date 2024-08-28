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
 * Complete the 'deleteNode' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER position
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

function deleteNode(llist, position) {
  // Write your code here
  // If the list is empty
  if (llist == null) {
    return null;
  }

  let currentNode = llist;

  // If the head needs to be removed
  if (position === 0) {
    return currentNode.next; // Return the next node as the new head
  }

  // Traverse the list to find the node before the one to delete
  for (let i = 0; currentNode != null && i < position - 1; i++) {
    currentNode = currentNode.next;
  }

  // If the position is more than the number of nodes
  if (currentNode == null || currentNode.next == null) {
    return llist;
  }

  // Node currentNode.next is the node to be deleted
  currentNode.next = currentNode.next.next;

  return llist; // Return the head of the modified list
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const llistCount = parseInt(readLine(), 10);

  let llist = new SinglyLinkedList();

  for (let i = 0; i < llistCount; i++) {
    const llistItem = parseInt(readLine(), 10);
    llist.insertNode(llistItem);
  }

  const position = parseInt(readLine(), 10);

  let llist1 = deleteNode(llist.head, position);

  printSinglyLinkedList(llist1, " ", ws);
  ws.write("\n");

  ws.end();
}
