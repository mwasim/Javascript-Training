/*
    This is an to practice traversing a linked list. Given a pointer to the head node of a linked list, print each node's data element, one per line. If the head pointer is null (indicating the list is empty), there is nothing to print.

    Function Description

    Complete the printLinkedList function in the editor below.

    printLinkedList has the following parameter(s):

    SinglyLinkedListNode head: a reference to the head of the list

    Print
    For each node, print its data value on a new line (console.log in Javascript).

    Sample Input
    2
    16
    13
    
    Sample Output
    16
    13
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

// Complete the printLinkedList function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function printLinkedList(head) {
  let currentNode = head;

  while (currentNode) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
  }
}

function main_printLinkedList(input) {
  const inputLines = input.split("\n");
  const llistCount = parseInt(inputLines[0], 10);

  let llist = new SinglyLinkedList();

  for (let i = 0; i < llistCount; i++) {
    const llistItem = parseInt(inputLines[i + 1], 10);
    //console.log(llistItem);
    llist.insertNode(llistItem);
  }

  printLinkedList(llist.head);
}

const input = "2\n16\n13";
main_printLinkedList(input);
