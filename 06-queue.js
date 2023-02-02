class JNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default class JQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first?.value || null;
  }

  enqueue(value) {
    const newNode = new JNode(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this.peek();
  }

  dequeue() {
    if (this.length === 0) {
      return this.peek();
    }
    if (this.length === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this.peek();
  }

  printQueue() {
    const arr = [];
    let currentNode = this.first;
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
}
