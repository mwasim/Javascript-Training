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

function printSinglyLinkedList(node, sep) {
  while (node != null) {
    process.stdout.write(String(node.data));

    node = node.next;

    if (node != null) {
      process.stdout.write(sep);
    }
  }
}

/*
 * Complete the 'reversePrint' function below.
 *
 * The function accepts INTEGER_SINGLY_LINKED_LIST llist as parameter.
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

function reversePrint(llist) {
  // Write your code here
  const stack = [];

  // Traverse the linked list and push each element onto the stack
  let currentNode = llist;
  while (currentNode !== null) {
    stack.push(currentNode.data);
    currentNode = currentNode.next;
  }

  // Pop elements from the stack to print them in reverse order
  while (stack.length > 0) {
    console.log(stack.pop());
    // if (stack.length > 0) {
    //   process.stdout.write("\n");
    // }
  }
}

function main() {
  const tests = parseInt(readLine(), 10);

  for (let testsItr = 0; testsItr < tests; testsItr++) {
    const llistCount = parseInt(readLine(), 10);

    let llist = new SinglyLinkedList();

    for (let i = 0; i < llistCount; i++) {
      const llistItem = parseInt(readLine(), 10);
      llist.insertNode(llistItem);
    }

    reversePrint(llist.head);
  }
}
