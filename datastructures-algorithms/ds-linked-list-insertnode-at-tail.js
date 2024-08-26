/*
    You are given the pointer to the head node of a linked list and an integer to add to the list. Create a new node with the given integer. Insert this node at the tail of the linked list and return the head node of the linked list formed after inserting this new node. The given head pointer may be null, meaning that the initial list is empty.

    Function Description
    Complete the insertNodeAtTail function in the editor below.

    insertNodeAtTail has the following parameters:
    - SinglyLinkedListNode pointer head: a reference to the head of a list
    - int data: the data value for the node to insert

    Returns
    SinglyLinkedListNode pointer: reference to the head of the modified linked list
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

// Complete the insertNodeAtTail function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
  // Create a new node with the given data
  const newNode = new SinglyLinkedListNode(data);

  // If the list is empty, return the new node as the head
  if (!head) {
    return newNode;
  }

  // Traverse to the last node in the list
  let current = head;
  while (current.next) {
    current = current.next;
  }

  // Add the new node to the end of the list
  current.next = newNode;

  // Return the head of the modified list
  return head;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const llistCount = parseInt(readLine(), 10);

  let llist = new SinglyLinkedList();

  for (let i = 0; i < llistCount; i++) {
    const llistItem = parseInt(readLine(), 10);
    const llist_head = insertNodeAtTail(llist.head, llistItem);
    llist.head = llist_head;
  }

  printSinglyLinkedList(llist.head, "\n", ws);
  ws.write("\n");

  ws.end();
}
