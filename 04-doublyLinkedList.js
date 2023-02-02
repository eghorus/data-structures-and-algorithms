class JNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export default class JDoublyLinkedList {
  constructor(value) {
    this.head = new JNode(value);
    this.tail = this.head;
    this.size = 1;
  }

  printList() {
    const list = [];
    let currentNode = this.head;
    while (currentNode) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(list);
  }

  append(value) {
    const newNode = new JNode(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  prepend(value) {
    const newNode = new JNode(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
}
