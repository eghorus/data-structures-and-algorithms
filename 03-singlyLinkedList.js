class JNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default class JSinglyLinkedList {
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
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  prepend(value) {
    const newNode = new JNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  traverse(index) {
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (currentIndex === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
    return null;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index >= this.size) {
      this.append(value);
      return;
    }
    const prevNode = this.traverse(index - 1);
    const newNode = new JNode(value);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.size++;
  }

  delete(index) {
    if (index >= this.size) index = this.size - 1;
    if (index <= 0) {
      this.head = this.head.next;
    } else {
      const prevNode = this.traverse(index - 1);
      prevNode.next = prevNode.next.next;
    }
    this.size--;
  }

  reverse() {
    if (this.size < 2) return;
    let prevNode = this.head;
    let currentNode = this.head.next;
    this.tail = prevNode;
    prevNode.next = null;
    while (currentNode) {
      const nextNodePointer = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNodePointer;
    }
    this.head = prevNode;
  }
}
