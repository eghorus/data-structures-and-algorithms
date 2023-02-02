class JNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default class JStack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  printStack() {
    const arr = [];
    let currentNode = this.top;
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  push(value) {
    const newNode = new JNode(value);
    newNode.next = this.top;
    this.top = newNode;
    if (this.length === 0) this.bottom = this.top;
    this.length++;
    return this.peek();
  }

  pop() {
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
      this.length--;
    } else if (this.length > 1) {
      this.top = this.top.next;
      this.length--;
    }
    return this.peek();
  }

  peek() {
    return this.top?.value || null;
  }
}
