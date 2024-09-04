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
 * Complete the 'removeDuplicates' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
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

function removeDuplicates(llist) {
  // Write your code here
  if (llist === null) {
    return null; // If the list is empty, return null
  }

  let currentNode = llist; // Start with the head of the list
  const seenValues = new Set(); // To track seen values

  // Initialize a new head for the new list without duplicates
  const newHead = new SinglyLinkedListNode(currentNode.data);
  seenValues.add(currentNode.data);
  let lastNode = newHead; // This will track the last node in the new list

  // Traverse the original list
  while (currentNode.next !== null) {
    currentNode = currentNode.next; // Move to the next node

    if (!seenValues.has(currentNode.data)) {
      // If the data hasn't been seen
      seenValues.add(currentNode.data); // Mark it as seen
      const newNode = new SinglyLinkedListNode(currentNode.data); // Create a new node
      lastNode.next = newNode; // Link it to the last node
      lastNode = newNode; // Update the last node
    }
  }

  return newHead; // Return the head of the new list without duplicates
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const llistCount = parseInt(readLine(), 10);

    let llist = new SinglyLinkedList();

    for (let i = 0; i < llistCount; i++) {
      const llistItem = parseInt(readLine(), 10);
      llist.insertNode(llistItem);
    }

    let llist1 = removeDuplicates(llist.head);

    printSinglyLinkedList(llist1, " ", ws);
    ws.write("\n");
  }

  ws.end();
}
