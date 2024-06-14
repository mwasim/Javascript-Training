class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const node = new Node(value);

    //if head and tail are null (or not set)
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    //CASE-1: When list has no nodes or the list is empty
    if (!this.head) {
      //head is not set, there are no nodes
      return undefined;
    }

    //CASE-2: When the list has more than 1 nodes
    let tempNode = this.head;
    let preNode = this.head;
    while (tempNode.next) {
      preNode = tempNode;
      tempNode = tempNode.next;
    }

    this.tail = preNode;
    this.tail.next = null;
    this.length--;

    //CASE-3: When the list has only one node
    if (this.length <= 0) {
      this.head = null;
      this.tail = null;
    }

    return tempNode;
  }
}

const list1 = new LinkedList(4);

//console.log(list1);
