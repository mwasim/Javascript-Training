/*
    A linked list is said to contain a cycle if any node is visited more than once while traversing the list. Given a pointer to the head of a linked list, determine if it contains a cycle. If it does, return 1. Otherwise, return 0.
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

function hasCycle(head) {
  if (!head || !head.next) return 0; // Validate input

  let slow = head; // Tortoise - pointer moves 1 step at a time
  let fast = head; // Hare - pointer moves 2 steps at a time

  while (fast && fast.next) {
    slow = slow.next; // Move slow pointer by 1
    fast = fast.next.next; // Move fast pointer by 2

    if (slow === fast) {
      // If they meet, there's a cycle
      return 1;
    }
  }

  return 0; // If we reach the end, there's no cycle
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const tests = parseInt(readLine(), 10);

  for (let testsItr = 0; testsItr < tests; testsItr++) {
    const index = parseInt(readLine(), 10);

    const llistCount = parseInt(readLine(), 10);

    let llist = new SinglyLinkedList();

    for (let i = 0; i < llistCount; i++) {
      const llistItem = parseInt(readLine(), 10);
      llist.insertNode(llistItem);
    }

    const extra = new SinglyLinkedListNode(-1);
    let temp = llist.head;

    for (let i = 0; i < llistCount; i++) {
      if (i == index) {
        extra = temp;
      }

      if (i != llistCount - 1) {
        temp = temp.next;
      }
    }

    temp.next = extra;

    let result = hasCycle(llist.head);

    ws.write((result ? 1 : 0) + "\n");
  }

  ws.end();
}
